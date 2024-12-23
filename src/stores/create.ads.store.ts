import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'

interface AdsDetails {
  category: string | null
  subCategory: string | null
  parent_location: string | null
  child_location: string | null
  images: File[]
  formInputsData: Record<string, any>
}

export const useAdsStore = defineStore(
  'ads',
  () => {
    const router = useRouter()

    const step = ref<number>(1)
    const adsDetails = ref<AdsDetails>({
      category: null,
      subCategory: null,
      parent_location: null,
      child_location: null,
      images: [],
      formInputsData: {}
    })

    function setStep(newStep: number) {
      step.value = newStep
    }

    function setCategory(category: string) {
      adsDetails.value.category = category
    }

    function setSubCategory(subCategory: string) {
      adsDetails.value.subCategory = subCategory
    }

    function set_parent_location(location: string) {
      adsDetails.value.parent_location = location
    }

    function set_child_location(location: string) {
      adsDetails.value.child_location = location
    }

    function addImage(image: File) {
      adsDetails.value.images.push(image)
    }

    function removeImage(index: number) {
      adsDetails.value.images.splice(index, 1)
    }

    function setFormInputsData(data: Record<string, any>) {
      adsDetails.value.formInputsData = data
    }

    function resetStore() {
      step.value = 1
      adsDetails.value = {
        category: null,
        subCategory: null,
        location: null,
        images: [],
        formInputsData: {}
      }
    }
    function goToStep(stepNumber: number) {
      setStep(stepNumber)
      router.push({ name: 'Create-Advert' })
    }

    return {
      step,
      adsDetails,
      setStep,
      setCategory,
      setSubCategory,
      set_parent_location,
      set_child_location,
      addImage,
      removeImage,
      setFormInputsData,
      resetStore,
      goToStep
    }
  },
  {
    //  persist: true // Persist store data using Pinia's persistence plugin
  }
)
