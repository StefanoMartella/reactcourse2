import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import CounterClass from "./examples/ex-redux/CounterClass";
import configureStore from "./examples/ex-redux/reducers/configureStore";
import SimpleTodoClass from "./examples/ex-redux/SimpleTodoClass";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <CounterClass />
      <SimpleTodoClass />
    </Provider>
  );
}

export default App;
