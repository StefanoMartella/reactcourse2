import { ADD_TODO, REMOVE_TODO } from "./../action-types/todo-action-types";

const initialState = {
  todos: [],
  todosCount: 0,
};

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload.todo],
        todosCount: state.todosCount + 1,
      };
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter(
          (aTodo) => aTodo.id !== action.payload.todoId
        ),
        todosCount: state.todosCount - 1,
      };
    default:
      return state;
  }
}
