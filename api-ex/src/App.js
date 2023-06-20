import "./App.css";
import { store } from "./store/store";
import { Provider } from "react-redux";
import router from "./routes/routing";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
