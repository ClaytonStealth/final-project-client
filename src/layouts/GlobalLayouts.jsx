import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Cart from "../components/Cart";
import { Outlet } from "react-router-dom";

const GlobalLayouts = (props) => {
  const { sideBar, setSideBar } = props;
  return (
    <div>
      <Navbar sideBar={sideBar} setSideBar={setSideBar} />
      <Outlet />
      <Cart sideBar={sideBar} setSideBar={setSideBar} />
      <Footer />
    </div>
  );
};

export default GlobalLayouts;
