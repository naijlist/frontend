import { useQuery } from "vue-query";
import axios from "axios";
export function useTodoQuery(todoId, { enabled }) {
    return useQuery(
        ["todos", todoId],
        () => axios.get(`http://localhost:5000/users`),
        {
            enabled,
            select: (todo) => todo.data,
        }
    );
}