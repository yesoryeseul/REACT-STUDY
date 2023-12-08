import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routing";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { worker } from "__mock__/handler";
import { useEffect } from "react";
import axios from "axios";

function App() {
  if (process.env.NODE_ENV === "development") {
    worker.start();
  }

  useEffect(() => {
    axios
      .get("/api/todo")
      .then((res) => console.log(res.data))
      .catch((err) => console.error(err));
  }, []);

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
