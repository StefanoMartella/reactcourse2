import React from "react";
import { useForm } from "react-hook-form";

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSuccess = (values) => {
    console.log(values);
  };

  const onError = (errors) => {
    console.error(errors);
  };

  const renderError = (errorMessage) => {
    return <p className="text-danger">{errorMessage}</p>;
  };

  return (
    <form onSubmit={handleSubmit(onSuccess, onError)}>
      <div>
        <label>Nome:</label>
        <br />
        <input
          {...register("name", {
            required: { value: true, message: "Il nome è richiesto" },
            maxLength: {
              value: 10,
              message: "Sono consentiti al massimo 10 caratteri",
            },
          })}
        />
        {errors.name && renderError(errors.name.message)}
      </div>

      <div>
        <label>Cognome:</label>
        <br />
        <input
          {...register("surname", {
            required: { value: true, message: "Il cognome è richiesto" },
          })}
        />
        {errors.surname && renderError(errors.surname.message)}
      </div>

      <button className="mt-2" type="submit">
        Invia
      </button>
    </form>
  );
}

export default Form;
