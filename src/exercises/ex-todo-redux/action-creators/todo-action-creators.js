import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
} from "../action-types/todo-actions-types";

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

export function toggleTodo(todoId) {
  return {
    type: TOGGLE_TODO,
    payload: { todoId },
  };
}
