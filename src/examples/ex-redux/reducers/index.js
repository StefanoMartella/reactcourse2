import { combineReducers } from "redux";
import counterReducer from "./counter-reducer";
import todoReducer from "./todo-reducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  todo: todoReducer,
});

export default rootReducer;
