import useCreateTodo from "hooks/queries/useCreateTodo";

import { useState } from "react";

const TodoCreate = () => {
  const [inputValues, setInputValues] = useState({
    title: "",
    content: "",
  });

  const handleChangeValues = (e) => {
    const { name, value } = e.target;
    setInputValues((prev) => ({ ...prev, [name]: value }));
    console.log({ [name]: value });
  };

  const createTodoMutation = useCreateTodo();

  const addTodo = () => {
    createTodoMutation.mutate({
      title: inputValues.title,
      content: inputValues.content,
    });
    setInputValues({ title: "", content: "" });
  };
  return (
    <>
      <input
        placeholder="title"
        name="title"
        value={inputValues.title}
        onChange={handleChangeValues}
      />
      <input
        placeholder="content"
        name="content"
        value={inputValues.content}
        onChange={handleChangeValues}
      />{" "}
      <button onClick={addTodo}>Add</button>
    </>
  );
};

export default TodoCreate;
