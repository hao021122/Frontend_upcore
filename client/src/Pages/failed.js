import React from "react";
import "../App.css";
import Failed from "../assets/false.svg";

export default function failed() {
  return (
    <div className="center">
      <img className="image" src={Failed} />
      <div className="welcome">
        <h1>Invalid username, please try again</h1>
      </div>

      <div className="sign-up">Return</div>
    </div>
  );
}
