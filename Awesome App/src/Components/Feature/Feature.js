import React from "react";
import "./Feature.css";
import { data } from "./FeatureData";
function Feature(props) {
  return (
    <div className="feature" id="feature">
      <div className="feature-container">
        <section className="feature-header">
          <h2>Awesome Apps Features</h2>
          <p>
            To make your document look professionally produced, Word provides
            header, footer, cover page, and text box designs that complement
            each other.
          </p>
        </section>
        <section className="feature-content">
          {data.map((item, key) => (
            <div className="feature-content-container" key={key}>
              {item.icon}
              <span>{item.name}</span>
              <p>{item.description}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

export default Feature;
