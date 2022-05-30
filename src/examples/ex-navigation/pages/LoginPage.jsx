import React, { useContext, useState } from "react";
import axios from "axios";
import LoginForm from "../components/LoginForm";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const { setToken } = useContext(AuthContext);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const onSubmit = (credentials) => {
    axios
      .post("http://167.99.39.229/api/v1/login", credentials)
      .then((response) => {
        setToken(response.data.token);
        navigate("/", { replace: true });
      })
      .catch(() => setError(true));
  };

  return (
    <div className="vh-100 d-flex justify-content-center align-items-center row">
      <div className="card p-4 col-7 col-xl-3 shadow mb-5 bg-white rounded">
        <LoginForm onSubmit={onSubmit} />
        {error && <p className="text-danger mt-2">Credenziali errate</p>}
      </div>
    </div>
  );
}

export default LoginPage;
