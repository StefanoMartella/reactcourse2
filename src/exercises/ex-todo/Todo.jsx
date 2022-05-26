import React, { useState } from "react";
import { Container } from "react-bootstrap";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function Todo() {
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <Container className="card shadow my-5 p-5">
        <h3 className="mb-5 text-center">TODO App</h3>
        <TodoForm todos={todos} setTodos={setTodos} />
        <TodoList todos={todos} setTodos={setTodos} />
      </Container>
    </div>
  );
}

export default Todo;
