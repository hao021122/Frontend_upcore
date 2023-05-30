import React from "react";
import "../App.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

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
              <AddCircleOutlineOutlinedIcon
                sx={{ fontSize: 30, color: "#fff" }}
              />
            </span>
          </a>
        </li>
        <li className="list">
          <a href="">
            <span className="icon">
              <NotificationsActiveOutlinedIcon
                sx={{ fontSize: 30, color: "#fff" }}
              />
            </span>
          </a>
        </li>
        <li className="list">
          <a href="">
            <span className="icon">
              <AccountCircleOutlinedIcon sx={{ fontSize: 30, color: "#fff" }} />
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
}
