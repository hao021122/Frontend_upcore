import React from "react";
import "../App.css";

import Back from "../Components/back";
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
            <AccountCircleOutlinedIcon sx={{ fontSize: 30, color: "#fff" }} />
          </span>
          <span className="title">Edit Personal</span>
        </div>
      </div>

      <div className="box small left">
        <div>
          <span>Profile Image</span>
          <div>
            <span></span>
            <span>
              <ArrowForwardIosIcon />
            </span>
          </div>
        </div>
        <div>
          <span>Username</span>
          <div>
            <span>Testing 123</span>
          </div>
        </div>
        <div>
          <span>Gender</span>
          <div>
            <span>Male</span>
            <span>
              <ArrowForwardIosIcon />
            </span>
          </div>
        </div>
      </div>
      <div className="box small right">
        <span>Change Withdraw Password</span>
        <span>Change Security PIN</span>
      </div>
      <div className="box small left">logout</div>
      <Footer />
    </div>
  );
}
