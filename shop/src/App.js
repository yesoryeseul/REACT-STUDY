import "./App.css";
import { useState } from "react";
import bg1 from "./img/iphone1.jpg";
import GlobalStyles from "./styles/global";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import NavigationBar from "./components/Navbar";
import Main from "./components/Main";
import Item from "./components/Item";
import dataList from "./data.js";

function App() {
  let [shoes] = useState(dataList);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <NavigationBar />
      <Main
        title={"iPhone 14"}
        sub={"놀라움 한가득."}
        more={"더 알아보기"}
        mainImg={bg1}
      />
      {/* <Main
        title={"iPhone 14"}
        sub={"놀라움 한가득."}
        more={"더 알아보기"}
        mainImg={bg2}
      /> 다크 테마로 어떻게 바꾸지? */}
      <Item />
    </ThemeProvider>
  );
}

export default App;
