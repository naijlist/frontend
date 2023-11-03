import { useMutation } from "vue-query";
import axios from "axios";

export const usePOST = (url, postCallBack = undefined) => {
    const { mutate, isLoading, isSuccess, isError } = useMutation({
        mutationFn: async (values) => {
            const response = await axios.post(url, values)
            return response?.data
        },
        onSuccess: (returnedData) => {
            postCallBack(returnedData)
            console.log('Success');

        },
        onError: () => {
            console.log('error');

        }
    })

    return { mutate, isLoading, isSuccess, isError }
}