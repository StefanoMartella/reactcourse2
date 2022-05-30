import React from "react";
import { Accordion, Button } from "react-bootstrap";
import { TodoContext } from "./context/TodoContext";

class TodoItem extends React.Component {
  static contextType = TodoContext;

  deleteTodo = () => {
    const { setTodos } = this.context;
    const { todo } = this.props;
    setTodos((oldTodos) => oldTodos.filter((aTodo) => aTodo.id !== todo.id));
  };

  toggleTodo = () => {
    const { setTodos } = this.context;
    const { todo } = this.props;
    setTodos((oldTodos) =>
      oldTodos.map((aTodo) =>
        aTodo.id === todo.id ? { ...aTodo, done: !aTodo.done } : aTodo
      )
    );
  };

  render() {
    const { todo } = this.props;
    const title = `#${todo.id} - ${todo.title}`;

    return (
      <Accordion.Item eventKey={todo.id}>
        <Accordion.Header>
          {todo.done ? <del>{title}</del> : title}
        </Accordion.Header>
        <Accordion.Body>
          {todo.description}
          <div className="mt-4 d-flex flex-row-reverse">
            <Button variant="danger" onClick={this.deleteTodo}>
              Cancella
            </Button>
            <Button
              onClick={this.toggleTodo}
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
}

export default TodoItem;
