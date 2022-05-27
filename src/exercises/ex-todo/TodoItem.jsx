import React from "react";
import { Accordion, Button } from "react-bootstrap";

class TodoItem extends React.Component {
  deleteTodo = () => {
    const { todo, setTodos } = this.props;
    setTodos((oldTodos) => oldTodos.filter((aTodo) => aTodo.id !== todo.id));
  };

  toggleTodo = () => {
    const { todo, setTodos } = this.props;
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
