import React from "react";
import logo from "../img/logo.png";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="/" className="navbar-logo">
        <img src={logo} alt="Logo" />
      </a>

      <a className="navbar-brand" href="/">
        <h1>My Cup of HK Tea</h1>
      </a>

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
