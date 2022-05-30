import React from "react";
import { Link } from "react-router-dom";

function ProfilePage() {
  return (
    <div>
      <h1>Profile page</h1>
      <Link to="./mariorossi">Vai al profilo di Mario Rossi</Link>
    </div>
  );
}

export default ProfilePage;
