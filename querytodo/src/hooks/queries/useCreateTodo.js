import { useMutation, useQueryClient } from "@tanstack/react-query";
import { TodoApis } from "apis/api";

import { QUERYKEYS } from "consts/keys";

// const useCreateTodo = () => {
//   const QueryClient = useQueryClient();

//   return useMutation((todoData) => TodoApi.createTodo(todoData), {
//     onSuccess: () => {
//       QueryClient.invalidateQueries([QUERYKEYS.GET_TODO]);
//     },
//     onError: (error) => {
//       alert(error);
//     },
//   });
// };
const useCreateTodo = () => {
  const createTodoMutation = useMutation(() => TodoApis.createTodo());

  return createTodoMutation;
};

export default useCreateTodo;
