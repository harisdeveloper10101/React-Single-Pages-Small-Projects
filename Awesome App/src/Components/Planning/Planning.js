import React from "react";
import "./Planning.css";
import { data } from "./PlanningData";
function Planning(props) {
  return (
    <div className="planning" id="planning">
      <h1 className="planning-heading">Choose your plan</h1>
      <div className="planning-container">
        {data.map((item, key) => (
          <div className="planning-card" key={key}>
            <div className="card-main"></div>
            <div className="card-details">
              <span className="card-plan">{item.plan}</span>
              <h3 className="card-price">{item.price}</h3>
              <span className="card-bill">{item.bill}</span>
              <span className="card-bill">{item.courseAccess}</span>
              <span className="card-bill">{item.courseDownload}</span>
              <span className="card-bill card-feedback">{item.feedback}</span>
              <span className="card-bill card-feedback">{item.reviews}</span>
              <span className="card-bill card-feedback">{item.support}</span>
              <div className="card-button">Start Now</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Planning;
