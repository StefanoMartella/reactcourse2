import React, { useContext } from "react";
import { ThemeContext } from "./../context/ThemeContext";

function Footer() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      style={{ backgroundColor: theme.primaryBackground }}
      className="w-100 p-4"
    >
      <p style={{ color: theme.primaryText }} className="text-center">
        Corso react 2022
      </p>
    </div>
  );
}

export default Footer;
