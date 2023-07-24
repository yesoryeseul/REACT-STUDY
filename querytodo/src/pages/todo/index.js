import useGetTodo from "hooks/queries/useGetTodo";
import OneTodo from "./one-todo";
import TodoCreate from "pages/create";

const Todo = () => {
  const { data } = useGetTodo();
  console.log("data", data);
  return (
    <>
      <h3>TodoList</h3>
      <ul style={{ padding: "0" }}>
        {data?.map((todo, idx) => (
          <OneTodo todo={todo} />
        ))}
      </ul>
      <TodoCreate />
    </>
  );
};

export default Todo;
