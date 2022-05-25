import React from "react";
import { Button } from "react-bootstrap";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Button>Testo bottone</Button>
        <Button className="m-2" variant="danger">
          Testo bottone danger
        </Button>
      </div>
    );
  }
}

export default App;
