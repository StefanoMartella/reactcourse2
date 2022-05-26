import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";

const rules = {
  required() {
    return { value: true, message: "Il campo è richiesto" };
  },
  maxLength(max) {
    return {
      value: max,
      message: `Sono consentiti al massimo ${max} caratteri`,
    };
  },
  pattern(regex) {
    return {
      value: regex,
      message: "Valore non valido",
    };
  },
};

function AddProductForm() {
  const [categories, setCategories] = useState([]);
  // const source = useRef();
  const controller = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    // source.current = axios.CancelToken.source();
    controller.current = new AbortController();

    return () => {
      // source.current.cancel("Canceled");
      controller.current.abort();
    };
  }, []);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories", {
      // .get("http://167.99.39.229/api/v1/products/categories", {
      // cancelToken: source.current.token,
      signal: controller.current.signal,
    })
      .then((response) => response.json())
      .then((data) => setCategories(data));
  }, []);

  const renderError = (errorMessage) => (
    <p className="text-danger m-0">{errorMessage}</p>
  );

  const onSuccess = (values) => {
    axios
      .post("https://fakestoreapi.com/products", values, {
        // .post("http://167.99.39.229/api/v1/products", values, {
        // cancelToken: source.current.token,
        signal: controller.current.signal,
      })
      .then((response) => console.log(response.data))
      .catch("Something went wrong");
  };

  const onError = (errors) => {
    console.error(errors);
  };

  return (
    <div className="p-5 shadow container my-4 bg-white rounded">
      <h2 className="mb-4 text-center">Inserisci prodotto</h2>
      <form onSubmit={handleSubmit(onSuccess, onError)}>
        <label className="mt-3">Titolo</label>
        <div className="input-group mb-3">
          <input
            className="form-control"
            {...register("title", {
              required: rules.required(),
              maxLength: rules.maxLength(10),
            })}
            type="text"
          />
        </div>
        <p className="text-muted m-0">Obbligatorio, massimo 10 caratteri</p>
        {errors.title && renderError(errors.title.message)}

        <label className="mt-3">Descrizione</label>
        <div className="input-group mb-3">
          <input
            className="form-control"
            {...register("description", {
              required: rules.required(),
              maxLength: rules.maxLength(250),
            })}
            type="text"
          />
        </div>
        <p className="text-muted m-0">Obbligatorio, massimo 250 caratteri</p>
        {errors.description && renderError(errors.description.message)}

        <label className="mt-3">Prezzo</label>
        <div className="input-group mb-3">
          <input
            className="form-control"
            {...register("price", {
              required: rules.required(),
              pattern: rules.pattern(/\d+\.?\d*/),
            })}
          />
        </div>
        <p className="text-muted m-0">Obbligatorio, valore numerico</p>
        {errors.price && renderError(errors.price.message)}

        <label className="mt-3">URL dell'immagine</label>
        <div className="input-group mb-3">
          <input
            className="form-control"
            {...register("image", {
              required: rules.required(),
              pattern: rules.pattern(
                /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/
              ),
            })}
            type="text"
          />
        </div>
        <p className="text-muted m-0">Obbligatorio, URL</p>
        {errors.image && renderError(errors.image.message)}

        <label className="mt-3">Categoria</label>
        <div className="input-group mb-3">
          <select
            className="form-control"
            {...register("category", {
              required: rules.required(),
            })}
            type="text"
          >
            <option></option>
            {categories.map((category) => (
              <option key={category}>{category}</option>
            ))}
          </select>
        </div>
        <p className="text-muted m-0">Obbligatorio</p>
        {errors.category && renderError(errors.category.message)}

        <button
          // onClick={handleSubmit(onSuccess, onError)}
          type="submit"
          className="btn btn-primary mt-4"
        >
          Invia
        </button>
      </form>
    </div>
  );
}

export default AddProductForm;
