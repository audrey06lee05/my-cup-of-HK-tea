import React from "react";
import menu from "../img/menu.png";
import "./menu.css";

const MenuPage = () => {
  return (
    <>
      <main className="menu">
        <img src={menu} alt="Menu"></img>
      </main>
    </>
  );
};

export default MenuPage;
