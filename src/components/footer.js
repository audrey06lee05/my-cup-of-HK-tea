import React from "react";
import "./footer.css";
import { BsInstagram, BsFacebook } from "react-icons/bs";

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
        <a
          className="icon-button"
          href="https://www.instagram.com/my_cup_of_hk_tea/"
          target="_blank"
        >
          <BsInstagram />
        </a>
        <a
          className="icon-button"
          href="https://www.facebook.com/share/2rE1zBPjqbKfWg6p/?mibextid=LQQJ4d"
          target="_blank"
        >
          <BsFacebook />
        </a>
      </div>
      <p id="copyright">© All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
