import React from "react";
import Back from "../Components/back";
import Term from "../assets/terms.svg";
import Footer from "../Components/Footer";

export default function Terms() {
  return (
    <div className="center">
      <div className="header">
        <div className="first-row">
          <Back />
        </div>
        <div className="second-row">
          <span className="icon">
            <img className="icon-image" src={Term} />
          </span>
          <span className="title">Terms</span>
        </div>
      </div>

      <div className="box">
        <div className="content"></div>
      </div>
      <Footer />
    </div>
  );
}
