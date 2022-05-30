import React from "react";
import { useForm } from "react-hook-form";

const rules = {
  required() {
    return { value: true, message: "Il campo è richiesto" };
  },
  minLength(min) {
    return {
      value: min,
      message: `È necessario inserire almeno ${min} caratteri`,
    };
  },
};

function LoginForm({ onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const renderError = (errorMessage) => {
    return <p className="text-danger">{errorMessage}</p>;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <p className="mb-4">Inserisci le credenziali per accedere</p>
      <div className="form-group mb-3">
        <input
          {...register("username", {
            required: rules.required(),
          })}
          className="form-control"
          type="text"
          placeholder="Username"
        />
        {errors.username && renderError(errors.username.message)}
      </div>
      <div className="form-group mb-3">
        <input
          {...register("password", {
            required: rules.required(),
            minLength: rules.minLength(8),
          })}
          className="form-control"
          rows="5"
          type="text"
          placeholder="Password"
        />
        {errors.password && renderError(errors.password.message)}
      </div>
      <button className="btn btn-primary w-100" type="submit">
        Login
      </button>
    </form>
  );
}

export default LoginForm;
