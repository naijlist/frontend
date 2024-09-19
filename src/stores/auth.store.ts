import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'

interface User {
  id: string
  name: string
  email: string
}

interface LoginPayload {
  data: {
    user: User
  }
  access_token: string
}

export const useAuthStore = defineStore(
  'auth',
  () => {
    const router = useRouter()
    const user = ref<User | null>(null)
    const loggedIn = ref(false)
    const userToken = ref<string | null>(null)

    function logout() {
      user.value = null
      userToken.value = null
      loggedIn.value = false
      router.push('/')
    }

    function login(payload: LoginPayload) {
      user.value = payload.data.user
      userToken.value = payload.access_token
      loggedIn.value = true
    }

    function $reset() {
      user.value = null
      userToken.value = null
      loggedIn.value = false
    }

    return { login, logout, $reset, user, loggedIn, userToken }
  },
  {
    persist: true
  }
)
