import React from "react";
import "./App.css";
import AddProductForm from "./exercises/ex-forms/AddProductForm";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true,
    };
  }

  render() {
    return (
      <>
        <button
          onClick={() =>
            this.setState((oldState) => ({ isVisible: !oldState.isVisible }))
          }
        >
          Toggle
        </button>
        <div className="App">{this.state.isVisible && <AddProductForm />}</div>
      </>
    );
  }
}

export default App;
