import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function Layout({ children, theme, toggleTheme }) {
  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      {children}
      <Footer theme={theme} />
    </>
  );
}

export default Layout;
