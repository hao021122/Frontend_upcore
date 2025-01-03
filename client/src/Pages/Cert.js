import React from "react";
import "../App.css";
import Back from "../Components/back";
import certImage from "../assets/Certificate.svg";
import Certification from "../assets/certPic.png";
import Footer from "../Components/Footer";

export default function Cert() {
  return (
    <div className="center">
      <div className="header">
        <div className="first-row">
          <Back />
        </div>
        <div className="second-row">
          <span className="icon">
            <img className="icon-image" src={certImage} />
          </span>
          <span className="title">Certificates</span>
        </div>
      </div>

      <div className="box">
        <div className="content">
        <img className="" src={Certification} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
