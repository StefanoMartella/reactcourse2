import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo } from "./action-creators/todo-action-creators";

function SimpleTodo() {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const { todos, todosCount } = useSelector((state) => state.todo);

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(addTodo({ id: Date.now(), text }));
  };

  const onDelete = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <div className="card rounded w-50 shadow p-4 m-2">
      <h4>Form inserimento</h4>
      <form onSubmit={onSubmit}>
        <input
          required
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        <button type="submit">Inserisci</button>
      </form>

      <h4 className="mt-4">Lista:</h4>
      {todos.map((todo) => (
        <div key={todo.id} className="d-flex flew-row align-items-center">
          <p>{todo.text}</p>
          <button onClick={() => onDelete(todo.id)}>Rimuovi</button>
        </div>
      ))}

      <p className="text-success mt-4">
        TODO totali: <strong>{todosCount}</strong>
      </p>
    </div>
  );
}

export default SimpleTodo;
