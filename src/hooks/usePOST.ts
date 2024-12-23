import { createApiInstance } from '@/config/axiosInstance'
import { useMutation } from '@tanstack/vue-query'
import { useToast } from '@/components/ui/toast/use-toast'

const { toast } = useToast()
interface PostOptions {
  baseURL?: string
  withAuth?: boolean
  contentType?: string
  callback?: (data: any) => void
  errorCallBack?: (data: any) => void
}
export const usePOST = (
  url: string,
  { baseURL, contentType = 'application/json', callback, errorCallBack }: PostOptions = {}
) => {
  const { mutate, isPending, isSuccess, isError } = useMutation({
    mutationFn: async (values: any) => {
      const axiosInstance = createApiInstance(baseURL || import.meta.env.VITE_BASE_URL)
      const response = await axiosInstance.post(url, values, {
        headers: {
          'Content-Type': contentType || 'application/json'
        }
      })
      return response?.data
    },
    onSuccess: (returnedData) => {
      callback != undefined ? callback(returnedData) : false
    },
    onError: (error: any) => {
      const { response } = error
      errorCallBack != undefined ? errorCallBack(response) : false
      toast({ variant: 'destructive', title: 'Error', description: response.data.message })
    }
  })

  return { mutate, isPending, isSuccess, isError }
}
