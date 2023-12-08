import OneTodo from "./one-todo";
import TodoCreate from "pages/create";
import { useQuery } from "@tanstack/react-query";
import { QUERYKEYS } from "consts/keys";
import { TodoApis } from "apis/api";

const Todo = () => {
  const { data: todoList, isLoading } = useQuery(
    [QUERYKEYS.GET_TODO],
    () => TodoApis.getTodo(),
    {
      onSuccess: () => {
        console.log("Todo list successfully fetched.");
      },
    }
  );

  console.log(todoList);
  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <h3>TodoList</h3>
      <ul style={{ padding: "0" }}>
        {todoList && todoList.data.map((todo) => <OneTodo todo={todo} />)}
      </ul>
      <TodoCreate />
    </>
  );
};

export default Todo;
