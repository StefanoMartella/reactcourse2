import { ADD_TODO, REMOVE_TODO } from "./../action-types/todo-action-types";

export function addTodo(todo) {
  return {
    type: ADD_TODO,
    payload: { todo },
  };
}

export function removeTodo(todoId) {
  return {
    type: REMOVE_TODO,
    payload: { todoId },
  };
}
