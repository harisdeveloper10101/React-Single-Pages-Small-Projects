import React from "react";
import "./Working.css";
import { data } from "./WorkingData";

import { FaApple, FaGooglePlay } from "react-icons/fa";

function Working(props) {
  return (
    <div className="working" id="working">
      <div className="working-container">
        <section className="working-features">
          <h2 className="working-heading">How does this App Work ?</h2>
          <div className="working-features-container">
            {data.map((item, key) => (
              <div className="working-attributes">
                {item.icon}
                <div className="working-description">
                  <span className="working-description-heading">
                    {item.heading}
                  </span>
                  <p className="working-description-subHeading">
                    {item.subHeading}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="working-buttons">
            <button className="apple-button">
              <FaApple className="working-buttons-icon" />
              <span>
                Available on <br />
                <b>APP STORE</b>
              </span>
            </button>
            <button className="google-button">
              <FaGooglePlay className="working-buttons-icon" />
              <span>
                Available on <br />
                <b>GOOGLE PLAY</b>
              </span>
            </button>
          </div>
        </section>
        <section className="working-image">
          <img src="../../assets/quality.png" alt="" />
        </section>
      </div>
    </div>
  );
}

export default Working;
