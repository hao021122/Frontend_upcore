import React from "react";
import "../App.css";
import Back from "../Components/back";
import About from "../assets/about.svg";
import Footer from "../Components/Footer";

export default function Aboutus() {
  return (
    <div className="center">
      <div className="header">
        <div className="first-row">
          <Back />
        </div>
        <div className="second-row">
          <span className="icon">
            <img className="icon-image" src={About} alt="About us image" />
          </span>
          <span className="title">About us</span>
        </div>
      </div>

      <div className="box">
        <div className="content">
          <p>
            TEACODE provides developers, agencies and merchants around the world
            with the tools and infrastructure to sell on the internet the way
            they want. From newly established startups to large enterprises, our
            customizable backend creates innovative shopping experiences today
            and is ready for what comes next. Creating the best headless
            e-commerce platform requires not only a bold product vision, but also
            actionable values that guide our day-to-day work and decisions.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
