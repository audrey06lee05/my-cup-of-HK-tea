import React from "react";

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
