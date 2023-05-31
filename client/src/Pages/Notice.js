import React from "react";
import "../App.css";
import Back from "../Components/back";
import bellImage from "../assets/ringtone.svg";
import Footer from "../Components/Footer";

export default function Notice() {
  return (
    <div className="center">
      <div className="header">
        <div className="first-row">
          <Back />
        </div>
        <div className="second-row">
          <span className="icon">
            <img className="icon-image" src={bellImage} />
          </span>
          <span className="title">Notice</span>
        </div>
      </div>

      <div className="bigBox">
        <div className="box">
          <div className="content">
            <p>
              The system will be maintained for 24 hours on January 1, 2023.
              Please understand that the update will be completed on January 2,
              2023
            </p>
          </div>
        </div>
        <div className="box">
          <div className="content">
            <p>
              The system will be maintained for 24 hours on January 1, 2023.
              Please understand that the update will be completed on January 2,
              2023
            </p>
          </div>
        </div>
        <div className="box">
          <div className="content">
            <p>
              Congratulations, you have won the reward, please contact customer
              service to get the reward
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
