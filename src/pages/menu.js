import React, { useState } from "react";
import leedsmenu from "../img/menu-leeds.png";
import readingmenu1 from "../img/menu-reading1.png";
import readingmenu2 from "../img/menu-reading2.png";
import "./menu.css";

const MenuPage = () => {
  const [selectedMenu, setSelectedMenu] = useState("leeds"); // State to track which menu is selected

  const showLeedsMenu = () => {
    setSelectedMenu("leeds");
  };

  const showReadingMenu = () => {
    setSelectedMenu("reading");
  };

  return (
    <>
      <main className="menu">
        {/* Buttons to choose the menu */}
        <div className="button-container">
          <button
            onClick={showLeedsMenu}
            className={selectedMenu === "leeds" ? "selected" : ""}
          >
            Leeds Menu
          </button>
          <button
            onClick={showReadingMenu}
            className={selectedMenu === "reading" ? "selected" : ""}
          >
            Reading Menu
          </button>
        </div>

        {/* Conditionally render the menu image based on which button is clicked */}
        {selectedMenu === "leeds" && <img src={leedsmenu} alt="Leeds Menu" />}
        {selectedMenu === "reading" && (
          <>
            <img src={readingmenu1} alt="Reading Menu Page 1" />
            <img src={readingmenu2} alt="Reading Menu Page 2" />
          </>
        )}
      </main>
    </>
  );
};

export default MenuPage;
