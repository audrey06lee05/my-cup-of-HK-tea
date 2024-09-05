import React from "react";
import milktea from "../img/milktea.png";
import neonlight from "../img/neon-light-hk.png";
import "./home.css";

const HomePage = () => {
  return (
    <div>
      <main className="home-welcome">
        <img src={milktea} alt="Milk Tea"></img>
        <div className="welcome-text">
          <img src={neonlight} alt="HK Neon Light"></img>
          <h1>Welcome to My Cup of HK Tea</h1>
          <h2>Hong Kong Style Milk Tea🧋</h2>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
