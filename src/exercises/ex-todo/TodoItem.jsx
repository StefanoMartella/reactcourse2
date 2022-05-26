import React from "react";
import { Accordion, Button } from "react-bootstrap";

function TodoItem({ todo, setTodos }) {
  const title = `#${todo.id} - ${todo.title}`;

  const deleteTodo = () => {
    setTodos((oldTodos) => oldTodos.filter((aTodo) => aTodo.id !== todo.id));
  };

  const toggleTodo = () => {
    setTodos((oldTodos) =>
      oldTodos.map((aTodo) =>
        aTodo.id === todo.id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  return (
    <Accordion.Item eventKey={todo.id}>
      <Accordion.Header>
        {todo.done ? <del>{title}</del> : title}
      </Accordion.Header>
      <Accordion.Body>
        {todo.description}
        <div className="mt-4 d-flex flex-row flex-row-reverse">
          <Button variant="danger" onClick={deleteTodo}>
            Cancella
          </Button>
          <Button
            onClick={toggleTodo}
            className="me-2"
            variant={todo.done ? "warning" : "success"}
          >
            {todo.done ? "Non fatto" : "Fatto"}
          </Button>
        </div>
      </Accordion.Body>
    </Accordion.Item>
  );
}

export default TodoItem;
