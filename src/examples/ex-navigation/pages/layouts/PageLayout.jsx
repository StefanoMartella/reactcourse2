import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../elements/Footer";
import Navbar from "./../elements/Navbar";

function PageLayout() {
  return (
    <>
      <Navbar />
      <div className="d-flex flex-grow-1 ">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default PageLayout;
