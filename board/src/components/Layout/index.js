import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../pages/header/Header";
import Footer from "../../pages/footer/Footer";
import BoardTitle from "../../pages/BoardTitle/BoardTitle";

const Layout = () => {
  return (
    <>
      <Header />
      <BoardTitle />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
