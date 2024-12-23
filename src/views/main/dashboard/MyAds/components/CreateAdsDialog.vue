<script setup lang="ts">
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { toTypedSchema } from '@vee-validate/zod'
import { h, ref } from 'vue'
import * as z from 'zod'
import IconComponent from '@/components/Icons/IconComponent.vue'
import TagComponent from '@/components/Shared/TagComponent.vue'
import { useGET } from '@/hooks/useGET'
import { createApiInstance } from '@/config/axiosInstance'
import Separator from '@/components/ui/separator/Separator.vue'
// import SelectLocation from './SelectLocation.vue'
import { computed } from 'vue'
import { ArrowLeft } from 'lucide-vue-next'
import { useAdsStore } from '@/stores/create.ads.store'
const select_category_id = ref('')
const fetch_sub_categories = ref(false)
const subCategories = ref<any[]>([])
const openSelectLocation = ref(false)
const ads_store = useAdsStore()
const formSchema = toTypedSchema(
  z.object({
    category: z.string().min(2).max(50),
    sub_category: z.string().min(10).max(50),
    location: z.string().min(10).max(50)
  })
)

const { data: categories, isPending } = useGET({
  url: 'category',
  queryKey: ['GET_ALL_CATEGORIES_IN_DIALOG']
})

const { data: sub_categories, isPending: fetching_sub_categories } = useGET({
  url: `sub-category/by-category-id/${select_category_id.value}`,
  queryKey: ['GET_ALL_CATEGORIES_IN_DIALOG', select_category_id.value],
  enabled: fetch_sub_categories.value
})

const { data: regions_data, isPending: fetching_regions } = useGET({
  url: `region`,
  queryKey: ['GET_ALL_REGIONS_IN_DIALOG', select_category_id.value]
})

const axiosInstance = createApiInstance(import.meta.env.VITE_BASE_URL)
const handleCategoryChange = async (categoryId: string) => {
  ads_store.setCategory(categoryId)
  const response = await axiosInstance.get(`sub-category/by-category-id/${categoryId}`)
  subCategories.value = response.data?.data
}

const handleSubCategoryChange = async (subCategoryId: string) => {
  ads_store.setSubCategory(subCategoryId)
  const response = await axiosInstance.get(`sub-category/${subCategoryId}`)
  ads_store.setFormInputsData(response.data?.data?.formInputs)
}

function onSubmit(values: any) {
  ads_store.goToStep(2)
}

const selectedParent = ref(null)
const selectedChild = ref(null)

const parentRegions = computed(() =>
  regions_data.value?.regions.filter((region) => region.parent_id === null)
)

const childRegions = computed(() =>
  regions_data.value?.regions.filter(
    (region) => selectedParent.value && region.parent_id === selectedParent.value.id
  )
)

const selectParent = (region) => {
  selectedParent.value = region
  ads_store.set_parent_location(region)
  selectedChild.value = null
}

const selectChild = (region) => {
  selectedChild.value = region
  ads_store.set_child_location(region)
  console.log('Selected Child:', region)
}
const goBackToParent = () => {
  selectedParent.value = null
  selectedChild.value = null
}
const images = ref<File[]>([])
const imagePreviews = ref<string[]>([])

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

const handleImageRemove = (index: number) => {
  images.value.splice(index, 1)
  imagePreviews.value.splice(index, 1)
}
</script>

<template>
  <Form v-slot="{ handleSubmit }" as="" keep-values :validation-schema="formSchema">
    <Dialog>
      <DialogTrigger as-child>
        <Button variant="outline"> <IconComponent icon="plus" /> Create new ads </Button>
      </DialogTrigger>
      <DialogContent class="w-full">
        <DialogHeader>
          <DialogTitle><TagComponent :title="`New Ads`" :color="`bg-[#CABDFF]`" /></DialogTitle>
        </DialogHeader>

        <form id="dialogForm" @submit="handleSubmit($event, onSubmit)" class="flex flex-col gap-10">
          <FormField v-slot="{ componentField }" name="category">
            <FormItem>
              <FormLabel class="flex gap-2 items-center"
                >Category <IconComponent icon="info" />
              </FormLabel>

              <Select v-bind="componentField" @update:model-value="handleCategoryChange">
                <FormControl>
                  <SelectTrigger class="py-6">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem
                      v-for="(category, index) in categories?.data?.categories"
                      :key="index"
                      :value="category?._id"
                      class="flex items-center"
                    >
                      <div class="flex items-center gap-4 w-full">
                        <img :src="category.imageUrl" :alt="category.name" class="w-8 h-8" />
                        {{ category.name }}
                      </div>
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </FormItem>
          </FormField>

          <FormField v-slot="{ componentField }" name="sub_category">
            <FormItem>
              <FormLabel class="flex gap-2 items-center"
                >Sub category <IconComponent icon="info" />
              </FormLabel>

              <Select v-bind="componentField" @update:model-value="handleSubCategoryChange">
                <FormControl>
                  <SelectTrigger class="py-6">
                    <SelectValue placeholder="Select sub category" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem
                      v-for="sub_category in subCategories"
                      :key="sub_category._id"
                      :value="sub_category._id"
                    >
                      {{ sub_category.name }}
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </FormItem>
          </FormField>
          <FormField v-slot="{ componentField }" name="location">
            <FormItem>
              <FormLabel class="flex gap-2 items-center">
                Location <IconComponent icon="info" />
              </FormLabel>

              <Select v-bind="componentField" :open="openSelectLocation">
                <FormControl>
                  <SelectTrigger @click="openSelectLocation = true" class="py-6">
                    <SelectValue
                      placeholder="Select your location"
                      :value="selectedParent?.name || 'Select your location'"
                    />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <!-- Parent Region Selection -->
                  <SelectGroup v-if="!selectedParent">
                    <template v-for="region in parentRegions" :key="region.id">
                      <SelectItem @click="selectParent(region)" :value="region._id">
                        {{ region.name }}
                      </SelectItem>
                    </template>
                  </SelectGroup>

                  <!-- Child Region Selection -->
                  <SelectGroup v-else>
                    <div class="px-4 py-2">
                      <button @click="goBackToParent" class="flex items-center gap-3">
                        <ArrowLeft /> {{ selectedParent.name }}
                      </button>
                    </div>
                    <Separator />
                    <template v-for="region in childRegions" :key="region.id">
                      <SelectItem
                        @click="selectChild(region), (openSelectLocation = false)"
                        :value="region._id"
                        >{{ region.name }}
                      </SelectItem>
                    </template>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </FormItem>
          </FormField>
          <div class="flex flex-wrap lg:justify-start gap-5 w-full max-w-full">
            <input type="file" multiple ref="file" class="hidden" @change="handleImageAdd" />
            <button
              type="button"
              class="bg-sc3 w-[130px] h-[130px] rounded-md flex justify-center items-center"
              @click="$refs.file.click()"
            >
              <IconComponent icon="plus" />
            </button>
            <div
              v-for="(image, index) in imagePreviews"
              :key="index"
              class="relative flex justify-start"
            >
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
        </form>

        <DialogFooter>
          <Button
            type="submit"
            form="dialogForm"
            class="bg-black rounded-md text-white w-full mt-5"
          >
            Next
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  </Form>
</template>
