import React from "react";
import "./App.css";
import CustomButton from "./examples/ex-styling/styled-components/CustomButton";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <CustomButton>Primary</CustomButton>
        <CustomButton secondary={true}>Secondary</CustomButton>
      </div>
    );
  }
}

export default App;
