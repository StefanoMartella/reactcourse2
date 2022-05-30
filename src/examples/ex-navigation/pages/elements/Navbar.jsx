import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function Navbar() {
  const { setToken } = useContext(AuthContext);

  return (
    <nav className="w-100 bg-primary p-4">
      <Link to="/" className="mx-4 text-white h5">
        Home
      </Link>
      <Link to="/about" className="mx-4 text-white h5">
        About
      </Link>
      <Link to="/contact" className="mx-4 text-white h5">
        Contact
      </Link>
      <Link to="/profile" className="mx-4 text-white h5">
        Profile
      </Link>
      <Link to="/lazy" className="mx-4 text-white h5">
        Lazy
      </Link>
      <button onClick={() => setToken(null)} className="mx-4 text-white h5">
        Logout
      </button>
    </nav>
  );
}

export default Navbar;
