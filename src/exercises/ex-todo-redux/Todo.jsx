import React from "react";
import { Container } from "react-bootstrap";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function Todo() {
  return (
    <div className="App">
      <Container className="card shadow my-5 p-5">
        <h3 className="mb-5 text-center">TODO App</h3>
        <TodoForm />
        <TodoList />
      </Container>
    </div>
  );
}

export default Todo;
