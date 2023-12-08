import { useQuery } from "@tanstack/react-query";
import { QUERYKEYS } from "consts/keys";
import { TodoApis } from "apis/api";
import { TodoData } from "__mock__/datas/todo.data";

const useGetTodo = () => {
  // useQuery([QUERYKEYS.GET_TODO], () => TodoApis.getTodo());
  return { data: TodoData };
};

export default useGetTodo;
