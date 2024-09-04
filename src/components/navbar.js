import React from "react";
import { Link } from "react-router-dom"; // for hyper links to change pages

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="/" className="nav-link">
        Home
      </a>
      <a href="/menu" className="nav-link">
        Menu
      </a>
      <a href="/contact" className="nav-link">
        Contact
      </a>
    </nav>
  );
};

export default Navbar;
