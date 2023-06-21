import SwList from "components/swList";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		element: <SwList />,
	},
]);

export default router;
