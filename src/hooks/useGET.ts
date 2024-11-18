import { createApiInstance } from '@/config/axiosInstance'
import { useQuery } from '@tanstack/vue-query'
import type { Ref } from 'vue'
export function useGET({
  baseURL,
  url,
  enabled,
  queryKey
}: {
  baseURL?: string
  url: string
  enabled?: Ref<boolean>
  queryKey: any[]
}) {
  const { data, isPending, isError, refetch, isRefetching, isRefetchError } = useQuery({
    queryKey,
    enabled,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    queryFn: async () => {
      const axiosInstance = createApiInstance(baseURL || import.meta.env.VITE_BASE_URL)
      const response = await axiosInstance.get(url)
      return response?.data
    }
  })
  return { data, isPending, isError, refetch, isRefetching, isRefetchError }
}
