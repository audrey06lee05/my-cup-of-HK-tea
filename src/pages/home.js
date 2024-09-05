import React from "react";
import milktea from "../img/milktea.png";
import lemontea from "../img/lemon-tea.png";
import eggwaffle from "../img/egg-waffle.png";
import neonlight from "../img/neon-light-hk.png";
import "./home.css";

const HomePage = () => {
  return (
    <div>
      <main className="home-welcome">
        <div className="welcome-text">
          <img src={neonlight} alt="HK Neon Light"></img>
          <h1>Welcome to My Cup of HK Tea</h1>
          <h2>Hong Kong Style Milk Tea🧋</h2>
        </div>
      </main>
      <article className="about-us">
        <h2>About Us</h2>
        <p>
          Lorem ipsum odor amet, consectetuer adipiscing elit. In lorem
          pulvinar; sagittis netus torquent quis! Euismod maecenas tristique id
          mus est hac nascetur montes. Massa semper tincidunt platea; turpis
          nibh tristique cursus justo. Feugiat class laoreet cras magnis sem
          elementum eleifend. Eget egestas elit consectetur sapien adipiscing
          pulvinar. Mauris a curae fames cursus quam dictum duis feugiat.
          Porttitor placerat varius at ex faucibus augue congue condimentum
          accumsan. Diam bibendum ligula imperdiet, ipsum vitae leo eu. Vel
          vivamus magnis, ullamcorper habitant scelerisque curae libero per.
          Malesuada ultrices in vehicula consectetur duis eros ultricies ex.
        </p>
        <figure className="food-pics">
          <img src={milktea} alt="Milk Tea"></img>
          <img src={lemontea} alt="Lemon Tea"></img>
          <img src={eggwaffle} alt="Egg Waffle"></img>
        </figure>

        <section className="review">
          <h5>
            "I am so so jealous that I'm not local at all!! I found this place
            by chance, and I am SO HAPPY" - Google Review
          </h5>
        </section>
      </article>
    </div>
  );
};

export default HomePage;
