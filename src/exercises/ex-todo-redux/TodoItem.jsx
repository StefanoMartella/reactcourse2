import React from "react";
import { Accordion, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { removeTodo, toggleTodo } from "./action-creators/todo-action-creators";

class TodoItem extends React.Component {
  deleteTodo = () => {
    const { todo, removeTodo } = this.props;
    removeTodo(todo.id);
  };

  toggleTodoState = () => {
    const { todo, toggleTodo } = this.props;
    toggleTodo(todo.id);
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
              onClick={this.toggleTodoState}
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

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ removeTodo, toggleTodo }, dispatch);

export default connect(null, mapDispatchToProps)(TodoItem);
