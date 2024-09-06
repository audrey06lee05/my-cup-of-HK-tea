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
        <article className="stores">
          <h1>Contact Us</h1>
          <p>Leeds Address:</p>
          <a
            className="address"
            href="https://maps.app.goo.gl/2C5KVvqnBfPgumVC6"
            target="_blank"
          >
            <p>No.16, Krikgate Market, Leeds LS2 7HY</p>
          </a>

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
          <p>Reading Address:</p>
          <a
            className="address"
            href="https://maps.app.goo.gl/dEWZepBnGFRCDKQW7"
            target="_blank"
          >
            <p>77-79 kings road, Reading, England Rg1 3dd</p>
          </a>

          <div className="icon-buttons">
            <a
              href="https://www.instagram.com/mcohktr/"
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
          <p>Contact us on social media!</p>
        </article>
      </main>
    </>
  );
};

export default ContactPage;
