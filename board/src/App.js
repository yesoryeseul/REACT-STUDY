import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./routes/routing";
import GlobalStyles from "./styles/global";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles /> {/* reset css 적용 */}
      <RouterProvider router={router} /> {/* 라우터 */}
    </ThemeProvider>
  );
}

export default App;
