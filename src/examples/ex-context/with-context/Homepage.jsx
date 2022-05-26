import React from "react";
import { ThemeContext } from "./context/ThemeContext";

class Homepage extends React.Component {
  static contextType = ThemeContext;

  render() {
    return (
      <div
        className="d-flex flex-grow-1 w-100 justify-content-center align-items-center"
        style={{ backgroundColor: this.context.theme.secondaryBackground }}
      >
        <h2 style={{ color: this.context.theme.secondaryText }}>Homepage</h2>
      </div>
    );
  }
}

// Homepage.contextType = ThemeContext;

export default Homepage;
