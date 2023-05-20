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
import { Routes, Route, Link, Outlet } from "react-router-dom";
import Detail from "./pages/Detail";

function App() {
  let [shoes] = useState(dataList);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <NavigationBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
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
            </>
          }
        />
        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />

        {/* Nested Route about/member about/location */}
        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>멤버임</div>} />
          <Route path="location" element={<div>위치임</div>} />
        </Route>

        <Route path="/event" element={<Event />}>
          <Route path="one" element={<EventOne />} />
          <Route path="two" element={<EventTwo />} />
        </Route>

        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;

function About() {
  return (
    <div>
      <h4>회사정보임</h4>
      <Outlet />
    </div>
  );
}

function Event() {
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet />
    </div>
  );
}

function EventOne() {
  return <div>첫 주문시 양배추즙 서비스</div>;
}

function EventTwo() {
  return <div>생일기념 쿠폰받기</div>;
}
