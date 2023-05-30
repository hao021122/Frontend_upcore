import React from "react";
import "../App.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import playImage from "../assets/play.svg";
import bellImage from "../assets/ringtone.svg";
import profileImage from "../assets/profile.svg";

export default function Footer() {
  return (
    <div className="footer">
      <ul>
        <li className="list btn">
          <a href="">
            <span className="f-icon">
              <HomeOutlinedIcon sx={{ fontSize: 30, color: "#fff" }} />
            </span>
            <span className="f-title">Home</span>
          </a>
        </li>
        <li className="list">
          <a href="">
            <span className="icon">
              <img className="footer-image" src={playImage} />
            </span>
          </a>
        </li>
        <li className="list">
          <a href="">
            <span className="icon">
              <img className="footer-image" src={bellImage} />
            </span>
          </a>
        </li>
        <li className="list">
          <a href="">
            <span className="icon">
              <img className="footer-image" src={profileImage} />
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
}
