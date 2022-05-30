import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

function Aboutpage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  console.log(searchParams.get("key"));

  return (
    <div>
      <h1>About page</h1>
      <button onClick={() => navigate("/")}>Vai alla home</button>
    </div>
  );
}

export default Aboutpage;
