import { useQuery } from "vue-query";
import axios from "axios";
export function useGET({ url, enabled }) {
    return useQuery(
        ["users"],
        () => axios.get(url),
        {
            enabled,
            select: (user) => user.data,
        }
    );
}