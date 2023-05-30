import React from "react";
import "../App.css";
import Back from "../Components/back";
import eventImage from "../assets/event.svg";
import Footer from "../Components/Footer";

export default function Event() {
  return (
    <div className="center">
      <div className="header">
        <div className="first-row">
          <Back />
        </div>
        <div className="second-row">
          <span className="icon">
            <img className="icon-image" src={eventImage} />
          </span>
          <span className="title">Latest Event</span>
        </div>
      </div>

      <div className="box">
        <div className="content"></div>
      </div>
      <Footer />
    </div>
  );
}
