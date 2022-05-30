import React, { Component } from "react";
import { Accordion, Card } from "react-bootstrap";
import TodoItem from "./TodoItem";
import { TodoContext } from "./context/TodoContext";

class TodoList extends Component {
  render() {
    const { todos, setTodos } = this.context;

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
}

TodoList.contextType = TodoContext;

export default TodoList;
