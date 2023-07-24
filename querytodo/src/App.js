import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routing";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const client = new QueryClient();

  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </div>
  );
}

export default App;
