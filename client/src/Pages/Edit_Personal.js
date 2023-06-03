import React from "react";
import "../App.css";

import Back from "../Components/back";
import profileImage from "../assets/profile.svg";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Footer from "../Components/Footer";

export default function Edit_Personal() {
  return (
    <div className="center">
      <div className="header">
        <div className="first-row">
          <Back />
        </div>
        <div className="second-row">
          <span className="icon">
          <img className="icon-image" src={profileImage} />
          </span>
          <span className="title">Edit Personal</span>
        </div>
      </div>

      <div className="bigBox">
        <div className="box small left">
          <div className="flex-row space-between personal-padding">
            <div>
              <span>Profile Image</span>
            </div>
            <div>
              <span>
                <AccountCircleOutlinedIcon
                  sx={{ fontSize: 30, color: "black" }}
                />
              </span>
              <span>
                <ArrowForwardIosIcon sx={{ fontSize: 15, color: "yellow" }}/>
              </span>
            </div>
          </div>
          <hr></hr>
          <div className="flex-row space-between personal-padding">
            <span>Username</span>
            <div>
              <span>Testing 123</span>
            </div>
          </div>
          <hr></hr>
          <div className="flex-row space-between personal-padding">
            <span>Gender</span>
            <div>
              <span>Male</span>
              <span>
              <ArrowForwardIosIcon sx={{ fontSize: 15, color: "yellow" }}/>
              </span>
            </div>
          </div>
        </div>
        <div className="box small right flex-column">
          <div className="personal-padding">
            <span>Change Withdraw Password</span>
          </div>
          <hr></hr>
          <div className="personal-padding">
            <span>Change Security PIN</span>
          </div>

        </div>
        <div className="box small left personal-logout">Logout</div>
      </div>
      <Footer />
    </div>
  );
}
