// stores/resetPasswordStore.ts
import { defineStore } from 'pinia'
import { ref } from 'vue'
interface Resetter {
  email?: string
  message?: string
  redirect?: boolean
  otp?: string
  changePassword?: boolean
}
export const useResetPasswordStore = defineStore(
  'resetPassword',
  () => {
    const resetter = ref<Resetter>()
    function setResetter(payload: any) {
      resetter.value = payload
    }

    return { resetter, setResetter }
  },
  { persist: true }
)
