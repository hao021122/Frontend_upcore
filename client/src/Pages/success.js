import React from "react";
import "../App.css";
import Success from "../assets/check.png";

export default function success() {
  return (
    <div className="center">
      <img src={Success} />
      <h1>Account Created Successfully!</h1>
      <div className="sign-up">Continue</div>
    </div>
  );
}
