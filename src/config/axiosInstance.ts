import { useAuthStore } from '@/stores/auth.store'
import axios, { type AxiosInstance } from 'axios'

// Dynamic axios instance function
export const createApiInstance = (baseURL: string): AxiosInstance => {
  const apiInstance = axios.create({
    baseURL
  })

  // Set default headers
  apiInstance.defaults.headers.common['Content-Type'] = 'application/json'

  // Request interceptor to add Authorization header if token exists
  apiInstance.interceptors.request.use(async (config) => {
    const authStore = useAuthStore()
    const userToken = authStore?.userToken
    if (userToken) {
      config.headers['Authorization'] = `Bearer ${userToken}`
    }

    return config
  })

  // Response interceptor for handling errors
  apiInstance.interceptors.response.use(
    (response) => response,
    (error) => handleApiError(error)
  )

  return apiInstance
}

// Shared error handler
export const handleApiError = (error: any) => {
  if (error.response) {
    console.error('Request failed with status code:', error.response.status)
    console.error('Response data:', error.response.data)
  } else if (error.request) {
    console.error('No response received. Request:', error.request)
  } else {
    console.error('Request setup error:', error.message)
  }
  return Promise.reject(error)
}
