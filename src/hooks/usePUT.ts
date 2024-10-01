import { createApiInstance } from '@/config/axiosInstance'
import { useMutation } from '@tanstack/vue-query'
import { useToast } from '@/components/ui/toast/use-toast'

const { toast } = useToast()

export const usePUT = (
  url: string,
  contentType?: string,
  callback?: ((data: any) => void) | undefined,
  baseURL?: string,
  method?: string
) => {
  const { mutate, isPending, isSuccess, isError } = useMutation({
    mutationFn: async (values) => {
      const axiosInstance = createApiInstance(baseURL || import.meta.env.VITE_BASE_URL)
      const response =
        method == 'patch'
          ? await axiosInstance.patch(url, values, {
              headers: {
                'Content-Type': contentType || 'application/json'
              }
            })
          : await axiosInstance.put(url, values, {
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

      toast({ variant: 'destructive', title: 'Error', description: response.data.message })
    }
  })

  return { mutate, isPending, isSuccess, isError }
}
