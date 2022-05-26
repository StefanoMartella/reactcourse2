import React from "react";

function Navbar({ theme, toggleTheme }) {
  return (
    <nav
      style={{ backgroundColor: theme.primaryBackground }}
      className="w-100 p-4 d-flex flex-direction-row justify-content-between"
    >
      <h4 style={{ color: theme.primaryText }}>Corso React</h4>
      <button
        onClick={toggleTheme}
        style={{ backgroundColor: theme.secondaryBackground }}
        className="py-2 px-4 rounded text-uppercase border-0"
      >
        <span style={{ color: theme.secondaryText }}>Cambia tema</span>
      </button>
    </nav>
  );
}

export default Navbar;
