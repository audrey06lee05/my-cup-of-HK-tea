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
          Welcome to My Cup of HK Tea, where every sip is crafted with care,
          blending the rich traditions of Hong Kong with a modern twist. Founded
          by Wilber Lee, a former district council member from Hong Kong, our
          shop is more than just a place to grab a drink—it’s a celebration of
          culture, flavor, and community.
        </p>
        <p>
          At My Cup of HK Tea, we believe that tea can bring people together.
          Whether you’re curious about new flavors, craving something familiar,
          or just looking for a cozy spot to relax, our shop welcomes all. It’s
          a place to enjoy quality drinks and connect with others, no matter
          where you’re from. Come visit us and experience a fusion of flavors,
          cultures, and community, all in one cup!
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
