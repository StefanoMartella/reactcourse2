import React from "react";
import themes from "../context/theme";
import { ThemeContext } from "./../context/ThemeContext";

class Navbar extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {({ theme, toggleTheme }) => (
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
              <span style={{ color: theme.secondaryText }}>
                {theme === themes.light ? "Dark" : "Light"}
              </span>
            </button>
          </nav>
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default Navbar;
