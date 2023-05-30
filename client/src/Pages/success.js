import React from "react";
import "../App.css";
import Success from "../assets/tick.svg";

export default function success() {
  return (
    <div className="center">
      <img className="image" src={Success} />
      <div className="welcome">
        <h1>Account Created Successfully!</h1>
      </div>

      <div className="sign-up">Continue</div>
    </div>
  );
}
