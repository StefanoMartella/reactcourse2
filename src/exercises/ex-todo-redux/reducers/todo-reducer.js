import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
} from "../action-types/todo-actions-types";

const initialState = {
  todos: [],
  key: "value",
};

function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [action.payload.todo, ...state.todos],
      };
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.todoId),
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.todoId
            ? { ...todo, done: !todo.done }
            : todo
        ),
      };
    default:
      return state;
  }
}

export default todoReducer;
