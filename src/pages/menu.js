import React, { useState } from "react";
import leedsmenu from "../img/menu-leeds.png";
import readingmenu from "../img/menu-reading.png";
import keyring from "../img/trolley-coin.png";
import "./menu.css";

const MenuPage = () => {
  const [selectedMenu, setSelectedMenu] = useState("leeds"); // State to track which menu is selected

  const showLeedsMenu = () => {
    setSelectedMenu("leeds");
  };

  const showReadingMenu = () => {
    setSelectedMenu("reading");
  };

  const products = [
    {
      picture: keyring,
      name: "Trolley Coin Keyring",
      description:
        "Buy 2 drinks, and get a free keyring for borrowing shopping carts! ",
      price: "",
    },
  ];

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
          <img src={readingmenu} alt="Reading Menu" />
        )}

        {/* Product section */}
        <section className="product-section">
          <h2>Our Products</h2>
          <div className="products-container">
            {products.map((product, index) => (
              <div key={index} className="product">
                <img src={product.picture} alt={product.name} />
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p className="price">{product.price}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default MenuPage;
