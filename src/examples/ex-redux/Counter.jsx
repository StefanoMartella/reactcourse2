import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseCounter,
  increaseCounter,
} from "./action-creators/counter-action-creators";

function Counter() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);

  return (
    <div className="m-4">
      <h1>{counter}</h1>
      <button onClick={() => dispatch(increaseCounter())}>Incrementa</button>
      <button onClick={() => dispatch(decreaseCounter())}>Decrementa</button>
    </div>
  );
}

export default Counter;
