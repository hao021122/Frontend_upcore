import React from "react";
import "../App.css";
import Failed from "../assets/cancel.png";

export default function failed() {
  return (
    <div className="center">
      <div className="image">
        <img src={Failed} />
      </div>
      <h1>Invalid username, please try again</h1>
      <div className="sign-up">Return</div>
    </div>
  );
}
