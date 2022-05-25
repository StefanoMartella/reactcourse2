import React from "react";

class TimerClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 0,
    };
    this.isRunning = false;
  }

  startTimer() {
    if (!this.isRunning) {
      this.isRunning = true;
      this.interval = setInterval(() => {
        console.log("inside interval");
        this.setState((oldState) => {
          return { timer: oldState.timer + 1 };
        });
      }, 1000);
    }
  }

  stopTimer() {
    this.isRunning = false;
    clearInterval(this.interval);
  }

  resetTimer() {
    this.stopTimer();
    this.setState({ timer: 0 });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return <h1>{this.state.timer}</h1>;
  }
}

export default TimerClass;
