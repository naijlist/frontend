<script setup lang="ts">
import { Skeleton } from '@/components/ui/skeleton'
import TagComponent from '@/components/Shared/TagComponent.vue'
import { createApiInstance } from '@/config/axiosInstance'
import { useGET } from '@/hooks/useGET'
import { computed, ref } from 'vue'
import { boolean, z, ZodError } from 'zod'
import { useAuthStore } from '@/stores/auth.store'
import { usePOST } from '@/hooks/usePOST'
import { stringify } from 'querystring'
import SelectCategory from './components/SelectLocation.vue'
import BackButton from '@/components/Shared/BackButton.vue'
type subCategoryType = {
  _id: any
  name: string
}

const subCategories = ref<any[]>([])
const fetchingSubCategory = ref(false)
const fetchingFormField = ref(false)
const formFields = ref<any[]>([])
const selectedSubCategoryId = ref<any>('')
const selectedCategoryId = ref<any>('')
const formStructure = ref<any[]>([])

const authStore = useAuthStore()
const userToken = computed(() => authStore.userToken)
const user = computed(() => authStore.user)

// State to hold form data
const formData = ref<{ [key: string]: any }>({})
const adsDetails = ref<{
  title: string
  negotiable: boolean
  description: string
  price: string
  seller: string | undefined | Blob | any
  category: string | undefined | Blob | any
  subCategory: string | undefined | Blob | any
  location: string
}>({
  title: '',
  negotiable: false,
  description: '',
  price: '',
  seller: user?.value?.id,
  category: '',
  subCategory: '',
  location: ''
})

// State to handle validation errors
const errors = ref<{ [key: string]: string }>({})

// Image upload states
const images = ref<File[]>([]) // Holds the image files
const imagePreviews = ref<string[]>([]) // Holds image preview URLs

// Zod schema for validation
let schema = ref<any>(null)

const { data: categories, isPending } = useGET({
  url: 'category',
  queryKey: ['GET_ALL_CATEGORIES_IN_CREATE_ADS_PAGE']
})

const axiosInstance = createApiInstance(import.meta.env.VITE_BASE_URL)

const handleCategoryChange = async (categoryId: string) => {
  selectedCategoryId.value = categoryId
  fetchingSubCategory.value = true
  const response = await axiosInstance.get(`sub-category/by-category-id/${categoryId}`)
  subCategories.value = response.data?.data
  setInterval(() => {
    fetchingSubCategory.value = false
  }, 3000)
}

const handleSubCategoryChange = async (subCategoryId: string) => {
  selectedSubCategoryId.value = subCategoryId
  fetchingFormField.value = true
  const response = await axiosInstance.get(`sub-category/${subCategoryId}`)
  formStructure.value = response.data?.data?.formInputs
  setInterval(() => {
    fetchingFormField.value = false
  }, 3000)

  // Initialize form data
  formStructure.value.forEach((field: any) => {
    formData.value[field.name] = field.value || ''
  })

  // Build Zod schema dynamically
  const schemaObject: any = {}
  formStructure.value.forEach((field: any) => {
    if (field.data_type === 'string') {
      schemaObject[field.name] = z.string().optional()
    } else if (field.data_type === 'number') {
      schemaObject[field.name] = z.number().optional()
    }

    // Handle required fields
    if (field.required) {
      schemaObject[field.name] = schemaObject[field.name].min(1, {
        message: `${field.label} is required`
      })
    }
  })

  // Create Zod schema
  schema.value = z.object(schemaObject)
}
const { mutate, isPending: creating_ads } = usePOST('ads', { contentType: 'multipart/form-data' })
const handleSubmit = () => {
  const condition = formData.value?.condition == 'Brand New' ? 'New' : formData.value?.condition
  const title = condition + ' ' + formData?.value.model
  adsDetails.value.title = title
  adsDetails.value.category = selectedCategoryId.value
  adsDetails.value.subCategory = selectedSubCategoryId.value

  const formDataToSend = new FormData()
  formDataToSend.append('adsDetails', JSON.stringify(adsDetails.value))
  formDataToSend.append('formInputsData', JSON.stringify(formData.value))

  images.value.forEach((file) => {
    formDataToSend.append('files', file)
  })

  try {
    schema.value.parse(formData.value)
    errors.value = {}
    mutate(formDataToSend, {
      onSuccess: (response) => {
        console.log(response)
      },
      onError: (error) => {
        console.log(error)
      }
    })
  } catch (err) {
    if (err instanceof ZodError) {
      err.errors.forEach((issue) => {
        errors.value[issue.path[0]] = issue.message
      })
    }
  }
}
// const handleSubmit = async () => {
//   try {
//     // Validate form data

//     errors.value = {}

//     // Prepare form data for submission
//     const formDataToSend = new FormData()
//     formDataToSend.append('description', adsDetails.value.description)
//     formDataToSend.append('price', adsDetails.value.price)
//     formDataToSend.append('location', adsDetails.value.location)
//     formDataToSend.append('negotiable', String(adsDetails.value.negotiable)) // Append negotiable as string
//     formData.value.images.forEach((image: string | Blob) => {
//       formDataToSend.append('images', image)
//     })

//     // Submit to the backend
//     const response = await axiosInstance.post('/ads', formDataToSend, {
//       headers: {
//         Authorization: `Bearer ${userToken.value}`,
//         'Content-Type': 'multipart/form-data'
//       }
//     })

//     // Handle success
//     console.log('Ad created successfully:', response.data)
//     // router.push('/ads') // Redirect to the ads page after success
//   } catch (err: any) {
//     // Handle validation errors
//     if (err instanceof ZodError) {
//       err.errors.forEach((issue) => {
//         errors.value[issue.path[0]] = issue.message
//       })
//     } else {
//       console.error('Error creating ad:', err)
//     }
//   }
// }
const handleFieldChange = async (name: string, value: string) => {
  formStructure.value.map(async (item) => {
    if (item.dependentOn === name && item.identifier !== name) {
      console.log(item.identifier)
      try {
        const url = `http://localhost:9000/api/v1/field-option/dynamic-options?subCategory=${selectedSubCategoryId.value}&fieldName=${item.identifier}&parentValue=${value}`
        const response: any = await fetch(url, {
          headers: {
            Authorization: `Bearer ${userToken.value}`,
            'Content-Type': 'application/json'
          }
        })
        const options = await response.json()
        item.possible_values = options.possibleValues
      } catch (error) {
        console.log(error)
      }
    }
  })
}

// Handle image addition
const handleImageAdd = (event: Event) => {
  const target = event.target as HTMLInputElement
  const files = target.files
  if (files) {
    for (const file of files) {
      images.value.push(file)
      imagePreviews.value.push(URL.createObjectURL(file))
    }
  }
}

// Remove an image
const handleImageRemove = (index: number) => {
  images.value.splice(index, 1)
  imagePreviews.value.splice(index, 1)
}
</script>

<template>
  <div class="flex justify-between items-center">
    <TagComponent title="New Ads" :color="`bg-[#CABDFF]`" />
    <BackButton />
  </div>
</template>
