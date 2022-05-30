import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addTodo, removeTodo } from "./action-creators/todo-action-creators";

class SimpleTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }

  onSubmit = (event) => {
    event.preventDefault();
    // dispatch(addTodo({ id: Date.now(), text }));
    this.props.addTodo({ id: Date.now(), text: this.state.text });
  };

  onDelete = (id) => {
    // dispatch(removeTodo(id));
    this.props.removeTodo(id);
  };

  render() {
    const { text } = this.state;
    const { todos, todosCount } = this.props;

    return (
      <div className="card rounded w-50 shadow p-4 m-2">
        <h4>Form inserimento</h4>
        <form onSubmit={this.onSubmit}>
          <input
            required
            value={text}
            onChange={(event) => this.setState({ text: event.target.value })}
          />
          <button type="submit">Inserisci</button>
        </form>

        <h4 className="mt-4">Lista:</h4>
        {todos.map((todo) => (
          <div key={todo.id} className="d-flex flew-row align-items-center">
            <p>{todo.text}</p>
            <button onClick={() => this.onDelete(todo.id)}>Rimuovi</button>
          </div>
        ))}

        <p className="text-success mt-4">
          TODO totali: <strong>{todosCount}</strong>
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  todos: state.todo.todos,
  todosCount: state.todo.todosCount,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ addTodo, removeTodo }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SimpleTodo);
