import React from "react";
import "./App.css";
import ComponentA from "./examples/ex-styling/css-modules/componentA/ComponentA";
import ComponentB from "./examples/ex-styling/css-modules/componentB/ComponentB";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ComponentA />
        <ComponentB />
      </div>
    );
  }
}

export default App;
