import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Todo from "pages/todo";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Todo />,
      },
    ],
  },
]);
export default router;
