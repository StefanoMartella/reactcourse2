import React from "react";
import "./App.css";
import Todo from "./exercises/ex-todo/Todo";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true,
    };
  }

  render() {
    return <Todo />;
  }
}

export default App;
