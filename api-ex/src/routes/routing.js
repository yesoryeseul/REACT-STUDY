import { createBrowserRouter } from "react-router-dom";
import IssueData from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <IssueData />,
  },
]);

export default router;
