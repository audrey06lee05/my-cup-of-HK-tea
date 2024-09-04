import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer-content">
      <div className="footer-links">
        <h3>
          <a href="/menu">Menu</a>
        </h3>
        <h3>
          <a href="/contact">Contact</a>
        </h3>
      </div>
      <p id="copyright">© All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
