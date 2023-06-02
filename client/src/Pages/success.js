import React from "react";
import "../App.css";
import Success from "../assets/tick.svg";

export default function success() {
  return (
    <div className="center">
      <img className="image" src={Success} />
      <div className="welcome">
        <p>Account created successfully</p>
      </div>

      <div className="sign-up">Continue</div>
    </div>
  );
}
