import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Main from "../pages/main";
import Detail from "../pages/detail/Detail";
import ContextAPI from "../pages/context";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/", // 메인 페이지
        element: <Main />,
      },
      {
        path: "/detail/:number", // 메인 페이지
        element: <Detail />,
      },
      {
        path: "/context",
        element: <ContextAPI />,
      },
    ],
  },
]);

export default router;
