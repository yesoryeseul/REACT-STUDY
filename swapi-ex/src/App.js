import "./App.css";
import GlobalStyles from "styles/global";
import { RouterProvider } from "react-router-dom";
import router from "routes/routing";

function App() {
	return (
		<>
			<RouterProvider router={router} />
			<GlobalStyles />
		</>
	);
}

export default App;
