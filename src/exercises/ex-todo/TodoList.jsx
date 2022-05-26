import React from "react";
import { Accordion, Card } from "react-bootstrap";
import TodoItem from "./TodoItem";

function TodoList({ todos, setTodos }) {
  return (
    <div className="mb-2 mt-4">
      {todos.length > 0 ? (
        <Accordion>
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} setTodos={setTodos} />
          ))}
        </Accordion>
      ) : (
        <Card className="p-4">
          <span className="text-center text-muted">
            Non ci sono TODO da svolgere
          </span>
        </Card>
      )}
    </div>
  );
}

export default TodoList;
