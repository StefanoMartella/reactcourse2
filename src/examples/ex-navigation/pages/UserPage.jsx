import React from "react";
import { useParams } from "react-router-dom";

function UserPage() {
  const params = useParams();

  console.log(params);

  return (
    <div>
      <h1>User page</h1>
      <h2>Username: {params.username}</h2>
    </div>
  );
}

export default UserPage;
