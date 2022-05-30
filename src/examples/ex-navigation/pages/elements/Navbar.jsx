import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function Navbar() {
  const { setToken } = useContext(AuthContext);

  return (
    <nav className="w-100 bg-primary p-4 d-flex flex-row justify-content-between">
      <div>
        <Link to="/" className="mx-4 text-white h5">
          Home
        </Link>
        <Link to="/about" className="mx-4 text-white h5">
          About
        </Link>
        {/* <Link to="/contact" className="mx-4 text-white h5">
          Contact
        </Link>
        <Link to="/profile" className="mx-4 text-white h5">
          Profile
        </Link>
        <Link to="/lazy" className="mx-4 text-white h5">
          Lazy
        </Link> */}
      </div>

      <div
        role="button"
        className="mx-4 text-white h5 d-flex align-items-center"
        onClick={() => setToken(null)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          className="bi bi-box-arrow-left"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"
          />
          <path
            fillRule="evenodd"
            d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"
          />
        </svg>
        <span className="ps-2">Esci</span>
      </div>
    </nav>
  );
}

export default Navbar;
