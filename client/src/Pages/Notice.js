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

      <div className="box">
        <div className="content"></div>
      </div>
      <Footer />
    </div>
  );
}
