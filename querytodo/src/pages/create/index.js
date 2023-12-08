import { useMutation, useQueryClient } from "@tanstack/react-query";
import { TodoData } from "__mock__/datas/todo.data";
import { TodoApis } from "apis/api";
import { QUERYKEYS } from "consts/keys";
import useCreateTodo from "hooks/queries/useCreateTodo";

import { useEffect, useState } from "react";

const TodoCreate = () => {
  const [inputValues, setInputValues] = useState({
    title: "",
    content: "",
  });

  const handleChangeValues = (e) => {
    const { name, value } = e.target;
    setInputValues((prev) => ({ ...prev, [name]: value }));
    // console.log({ [name]: value });
    console.log(inputValues);
  };

  const queryClient = useQueryClient();

  const { mutate: addTodoMutation } = useMutation(
    (newTodo) => TodoApis.createTodo(newTodo),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([QUERYKEYS.GET_TODO]);
      },
    }
  );

  const addTodo = () => {
    addTodoMutation({
      title: inputValues.title,
      content: inputValues.content,
    });
    TodoData.push(inputValues);
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
      {/* {isSuccess && (
      <div>
        <h3>{inputValues.title}</h3>
        <p>{inputValues.content}</p>
      </div>
      )}  */}
    </>
  );
};

export default TodoCreate;
