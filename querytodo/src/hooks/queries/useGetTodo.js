import { useQuery } from "@tanstack/react-query";
import { TodoData } from "apis/datas/todo.data";
import { TodoApi } from "apis/todo.api";
import { QUERYKEYS } from "consts/keys";

const useGetTodo = () => {
  useQuery([QUERYKEYS.GET_TODO], () => TodoApi.getTodo());
  return { data: TodoData };
};

export default useGetTodo;
