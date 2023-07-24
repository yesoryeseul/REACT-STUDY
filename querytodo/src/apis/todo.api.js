import axios from "axios";

export const TodoApi = {
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
