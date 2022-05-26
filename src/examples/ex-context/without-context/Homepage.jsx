import React from "react";

function Homepage({ theme }) {
  return (
    <div
      className="d-flex flex-grow-1 w-100 justify-content-center align-items-center"
      style={{ backgroundColor: theme.secondaryBackground }}
    >
      <h2 style={{ color: theme.secondaryText }}>Homepage</h2>
    </div>
  );
}

export default Homepage;
