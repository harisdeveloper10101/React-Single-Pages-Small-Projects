import React from "react";
import "./Home.css";

import { menu } from "./MenuData";

function Home(props) {
  function getIntoView(id) {
    document.getElementById(id).scrollIntoView();
  }
  return (
    <div className="home" id="home">
      <section className="header">
        <div className="logo-container">
          <img src="../../assets/Home/logo.png" alt="" />
        </div>
        <div className="menu-container">
          {menu.map((item, key) => (
            <span onClick={() => getIntoView(item.id)}>{item.name}</span>
          ))}
        </div>
      </section>
      <div className="home-container">
        <section className="home-description">
          <p className="home-heading">
            Awesome App for
            <br />
            Your Modern <span style={{ color: "aqua" }}>Lifestyle</span>
          </p>

          <p className="home-subHeading">
            To make your document look professionally produced, Word provides
            header, footer, cover page, and text box designs that complement
            each other.{" "}
          </p>
          <div className="home-buttons">
            <button>Download app</button>
            <button>Discover more</button>
          </div>
        </section>
        <section className="home-image">
          <img src="../../assets/home/homeImage.png" alt="" />
        </section>
      </div>
    </div>
  );
}

export default Home;
