import React from "react";
import { BsInstagram, BsFacebook } from "react-icons/bs";
import leedsstore from "../img/leeds-store.png";
import map from "../img/map.png";
import "./contact.css";

const ContactPage = () => {
  return (
    <>
      <main className="contact">
        <figure>
          <img src={leedsstore} alt="Leeds Store"></img>
        </figure>
        <article className="leeds-store">
          <h1>Contact Us</h1>
          <p>Address:</p>
          <a
            className="address"
            href="https://maps.app.goo.gl/2C5KVvqnBfPgumVC6"
            target="_blank"
          >
            <p>No.16, Krikgate Market, Leeds LS2 7HY</p>
          </a>
          <p>Contact us on social media!</p>
          <div className="icon-buttons">
            <a
              href="https://www.instagram.com/my_cup_of_hk_tea/"
              target="_blank"
              rel="noreferrer"
            >
              <BsInstagram />
            </a>
            <a
              href="https://www.facebook.com/share/2rE1zBPjqbKfWg6p/?mibextid=LQQJ4d"
              target="_blank"
              rel="noreferrer"
            >
              <BsFacebook />
            </a>
          </div>
        </article>
      </main>
    </>
  );
};

export default ContactPage;
