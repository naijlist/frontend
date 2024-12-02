<script setup lang="ts">
import { Skeleton } from '@/components/ui/skeleton'
import TagComponent from '@/components/Shared/TagComponent.vue'
import { createApiInstance } from '@/config/axiosInstance'
import { useGET } from '@/hooks/useGET'
import { computed, ref } from 'vue'
import { z, ZodError } from 'zod'
import { useAuthStore } from '@/stores/auth.store'
import { usePOST } from '@/hooks/usePOST'

type subCategoryType = {
  _id: any
  name: string
}

const subCategories = ref<any[]>([])
const fetchingSubCategory = ref(false)
const fetchingFormField = ref(false)
const formFields = ref<any[]>([])
const selectedSubCategoryId = ref('')
const selectedCategoryId = ref('')
const formStructure = ref<any[]>([])

const authStore = useAuthStore()
const userToken = computed(() => authStore.userToken)
const user = computed(() => authStore.user)

// State to hold form data
const formData = ref<{ [key: string]: any }>({})
const staticForm = ref<{
  description: string
  price: string
  seller: string | undefined | Blob
  location: string
}>({
  description: '',
  price: '',
  seller: user?.value?.id,
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
const { mutate, isPending: creating_ads } = usePOST('ads')
const validateForm = () => {
  staticForm.value.seller = user?.value?.id
  const condition = formData.value?.condition == 'Brand New' ? 'New' : formData.value?.condition
  const title = condition + ' ' + formData?.value.model
  const seller = staticForm.value?.seller
  const description = staticForm.value?.description
  const location = staticForm?.value?.location
  const price = staticForm?.value?.price

  const formInfo = new FormData()
  formInfo.append('title', title)
  formInfo.append('seller', seller)
  formInfo.append('category', selectedCategoryId.value)
  formInfo.append('description', description)
  formInfo.append('location', location)
  formInfo.append('price', price)
  formInfo.append('formInputsData', formData.value)
  formInfo.append('images', images.value)
  try {
    schema.value.parse(formData.value)
    errors.value = {}
    console.log('Form is valid!', formInfo, images.value)
    mutate(formInfo, {
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
  <div>
    <TagComponent title="Create new Advert" :color="`bg-[#CABDFF]`" />
    <div class="mt-16 mb-5">
      <!-- Form content here -->
      <div class="">
        <TagComponent title="Create new Advert" :color="`bg-[#CABDFF]`" />
        <div class="mt-16 mb-5" v-if="!isPending">
          <h3 class="mb-5 text-base font-medium text-textColor dark:text-white">
            Start with selecting category
          </h3>
          <ul class="w-full flex flex-wrap justify-start items-center gap-5">
            <li v-for="category in categories?.data?.categories" :key="category._id">
              <input
                type="radio"
                :id="category?.name"
                name="hosting"
                :value="category?._id"
                class="hidden peer"
                @change="handleCategoryChange(category?._id)"
                required
              />
              <label
                :for="category?.name"
                class="inline-flex items-center justify-between p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-primary peer-checked:border-primary peer-checked:text-primary hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 w-fit"
              >
                <div class="block">
                  <div class="w-full font-normal text-sm font-poppins">{{ category?.name }}</div>
                </div>
              </label>
            </li>
          </ul>
        </div>

        <div class="mt-10 mb-5">
          <div class="flex flex-col justify-start items-start gap-5" v-if="fetchingSubCategory">
            <Skeleton class="h-7 w-[200px] bg-slate-400" />
            <div class="flex justify-start items-start gap-5">
              <Skeleton v-for="item in 8" :key="item" class="h-7 w-[100px] bg-slate-400" />
            </div>
          </div>
          <div class="" v-if="!fetchingSubCategory && subCategories.length > 0">
            <h3 class="mb-5 text-base font-medium text-textColor dark:text-white">
              Select sub-category
            </h3>
            <ul class="w-full flex flex-wrap justify-start items-center gap-5">
              <li v-for="category in subCategories" :key="category._id">
                <input
                  type="radio"
                  :id="category?.name"
                  name="hosting"
                  :value="category?._id"
                  class="hidden peer"
                  @change="handleSubCategoryChange(category?._id)"
                  required
                />
                <label
                  :for="category?.name"
                  class="inline-flex items-center justify-between p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-primary peer-checked:border-primary peer-checked:text-primary hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 w-fit"
                >
                  <div class="block">
                    <div class="w-full font-normal text-sm font-poppins">{{ category?.name }}</div>
                  </div>
                </label>
              </li>
            </ul>
          </div>
        </div>
        <h3>Upload Images</h3>
        <div>
          <!-- Image input -->
          <input type="file" accept="image/*" multiple @change="handleImageAdd" />
          <div class="flex gap-4 mt-4">
            <!-- Preview images -->
            <div v-for="(image, index) in imagePreviews" :key="index" class="relative">
              <img :src="image" alt="Preview" class="w-32 h-32 object-cover" />
              <button
                type="button"
                @click="handleImageRemove(index)"
                class="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
              >
                X
              </button>
            </div>
          </div>
        </div>
        <div>
          <form @submit.prevent="validateForm">
            <div v-for="(field, index) in formStructure" :key="index">
              <!-- Render single-select input -->
              <div v-if="field.input_type === 'single_select'">
                <label :for="field.name">{{ field.label }}</label>
                <select
                  v-model="formData[field.name]"
                  @change="handleFieldChange(field.identifier, formData[field.name])"
                  :id="field.name"
                >
                  <option
                    v-for="option in field.possible_values"
                    :key="option.value"
                    :value="option.value"
                  >
                    {{ option.value }}
                  </option>
                </select>
              </div>

              <!-- Render other input types here -->
              <div v-else-if="field.input_type === 'text'">
                <label :for="field.name">{{ field.label }}</label>
                <input type="text" v-model="formData[field.name]" :id="field.name" />
              </div>

              <!-- Error display -->
              <div v-if="errors[field.name]" style="color: red">
                {{ errors[field.name] }}
              </div>
            </div>
            <div class="flex flex-col">
              <label for="">Location</label>
              <select name="" v-model="staticForm.location" id="">
                <option value="sokoto">Sokoto</option>
                <option value="sokoto">Lagos</option>
                <option value="sokoto">Abuja</option>
              </select>
              <br />
              <label for="Description"></label>
              <textarea v-model="staticForm.description" id="" cols="30" rows="10"></textarea>
              <br />

              <label for="">Price</label>
              <input type="text" v-model="staticForm.price" />
            </div>
            <!-- Submit button -->
            <button type="submit" class="bg-sc1 text-white p-2 rounded-md my-5">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
