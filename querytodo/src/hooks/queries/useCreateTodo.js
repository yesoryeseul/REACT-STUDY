import { useMutation, useQueryClient } from "@tanstack/react-query";
import { TodoApi } from "apis/todo.api";
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
  const createTodoMutation = useMutation((todoData) =>
    TodoApi.createTodo(todoData)
  );

  return createTodoMutation;
};

export default useCreateTodo;
