import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  decreaseCounter,
  increaseCounter,
} from "./action-creators/counter-action-creators";

class CounterClass extends React.Component {
  render() {
    const { counter, increaseCounter, decreaseCounter } = this.props;

    return (
      <div className="m-4">
        <h1>{counter}</h1>
        <button onClick={increaseCounter}>Incrementa</button>
        <button onClick={decreaseCounter}>Decrementa</button>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  counter: state.counter.counter,
});

export const mapDispatchToProps = (dispatch) => ({
  increaseCounter: () => dispatch(increaseCounter()),
  decreaseCounter: () => dispatch(decreaseCounter()),
});

// export const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({ increaseCounter, decreaseCounter }, dispatch);
// };

export default connect(mapStateToProps, mapDispatchToProps)(CounterClass);
