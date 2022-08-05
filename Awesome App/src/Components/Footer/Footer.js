import React from "react";
import "./Footer.css";
import { FaApple, FaGooglePlay } from "react-icons/fa";
function Footer(props) {
  return (
    <div className="footer" id="footer">
      <section className="user-container">
        <h2>User Review</h2>
        <img className="user-image" src="../../assets/cloning.jpg" alt="" />
        <div className="user-review">
          <p>
            Video provides a powerful way to help you prove your point. When you
            click Online Video, you can paste in the embed code for the video
            you want to add. You can also type a keyword to search online for
            the video that best fits your document.
          </p>
          <br />
          <b>- Haris umar</b>
        </div>
      </section>
      <section className="footer-container">
        <h2>Let's start using today</h2>
        <div className="working-buttons footer-buttons">
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
        <p>Copyright &copy; 2022 harisdeveloper10101.</p>
      </section>
    </div>
  );
}

export default Footer;
