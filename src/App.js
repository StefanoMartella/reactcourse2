import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import Todo from "./exercises/ex-todo-context/Todo";
import configureStore from "./examples/ex-redux/reducers/configureStore";
import Counter from "./examples/ex-redux/Counter";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default App;
