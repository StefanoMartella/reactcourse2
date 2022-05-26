import React from "react";

function Footer({ theme }) {
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
