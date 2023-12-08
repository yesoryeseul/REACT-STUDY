import axios from "axios";
// import { axiosInstance } from "./@core";

export const TodoApis = {
  getTodo() {
    return axios.get("/api/todo");
  },

  createTodo({ title, content }) {
    return axios.post("/api/todo", {
      title,
      content,
    });
  },
};
