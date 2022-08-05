import React from "react";
import { GrWorkshop } from "react-icons/gr";
import "./Quality.css";
function Quality(props) {
  return (
    <div className="quality" id="quality">
      <main className="quality-container">
        <section className="quality-details">
          <GrWorkshop className="quality-icon" />
          <h2>Easy to Manage Your All Data by This App</h2>
          <p>
            {" "}
            To make your document look professionally produced, Word provides
            header, footer, cover page, and text box designs that complement
            each other. To make your document look professionally produced, Word
            provides header, footer, cover page, and text box designs that
            complement each other.
          </p>
          <div>Download Now!</div>
        </section>
      </main>
    </div>
  );
}

export default Quality;
