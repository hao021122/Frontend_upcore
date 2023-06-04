import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import homeImage from "../assets/home.svg";
import playImage from "../assets/play.svg";
import bellImage from "../assets/ringtone.svg";
import profileImage from "../assets/profile.svg";

export default function Footer() {
  const navigate = useNavigate();
  const handleToHome = () => {
    navigate("/home");
  };
  const handleToGame = () => {
    navigate("/game_start");
  };
  const handleToNotice = () => {
    navigate("/notification");
  };
  const handleToEditProfile = () => {
    navigate("/change_profile");
  };
  return (
    <div className="footer">
      <ul className="ul-list">
        <li className="list btn" onClick={handleToHome}>
          <a href="">
            <span className="f-icon">
              <img className="footer-image" src={homeImage} />
            </span>
            <span className="f-title">Home</span>
          </a>
        </li>
        <li className="list" onClick={handleToGame}>
          <a href="">
            <span className="icon">
              <img className="footer-image" src={playImage} />
            </span>
          </a>
        </li>
        <li className="list" onClick={handleToNotice}>
          <a href="">
            <span className="icon">
              <img className="footer-image" src={bellImage} />
            </span>
          </a>
        </li>
        <li className="list" onClick={handleToEditProfile}>
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
