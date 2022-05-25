import "./App.css";
import React, { createRef } from "react";
import Timer from "./ex-ref/Timer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.timerRef = createRef();
    this.state = {
      isTimerVisible: true,
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.isTimerVisible && (
          <>
            <Timer ref={this.timerRef} />
            <button onClick={() => this.timerRef.current.startTimer()}>
              Avvia
            </button>
            <button onClick={() => this.timerRef.current.stopTimer()}>
              Stop
            </button>
            <button onClick={() => this.timerRef.current.resetTimer()}>
              Reset
            </button>
          </>
        )}
        <button
          onClick={() =>
            this.setState((oldState) => ({
              isTimerVisible: !oldState.isTimerVisible,
            }))
          }
        >
          {this.state.isTimerVisible ? "Nascondi" : "Mostra"}
        </button>
      </div>
    );
  }
}

export default App;
