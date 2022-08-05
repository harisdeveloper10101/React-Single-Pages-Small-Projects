import React from "react";
import "./Tutorial.css";
import { BsPlayCircleFill } from "react-icons/bs";

function Tutorial(props) {
  return (
    <div className="tutorial" id="tutorial">
      <video autoPlay loop muted className="tutorial-container">
        <source src="../../../assets/tutorial.mp4" type="video/mp4"></source>
      </video>
      <div className="tutorial-details">
        <h1>Watch a Quick Tutorial</h1>
        <BsPlayCircleFill className="tutorial-icon" />
      </div>
    </div>
  );
}

export default Tutorial;
