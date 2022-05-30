import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addTodo } from "./../../examples/ex-redux/action-creators/todo-action-creators";

function TodoForm() {
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todo);
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const renderError = (errorMessage) => (
    <small className="text-danger">{errorMessage}</small>
  );

  const onSuccess = (values) => {
    const id = Math.max(0, ...todos.map((todo) => todo.id)) + 1;
    // setTodos((oldTodos) => [{ id, done: false, ...values }, ...oldTodos]);
    dispatch(addTodo({ id, done: false, ...values }));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSuccess)}>
      <div className="form-group mb-3">
        <label className="mb-3">Titolo</label>
        <input
          className="form-control"
          placeholder="Inserisci il titolo della TODO"
          {...register("title", {
            required: { value: true, message: "Il titolo è richiesto" },
          })}
        />
        {errors.title && renderError(errors.title.message)}
      </div>

      <div className="form-group mb-3">
        <label className="mb-3">Descrizione</label>
        <input
          className="form-control"
          placeholder="Inserisci la descrizione della TODO"
          {...register("description", {
            required: { value: true, message: "La descrizione è richiesta" },
          })}
        />
        {errors.description && renderError(errors.description.message)}
      </div>

      <button className="btn btn-primary" type="submit">
        Inserisci
      </button>
    </form>
  );
}

export default TodoForm;
