import React from "react";
import "../App.css";
import Back from "../Components/back";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import Footer from "../Components/Footer";

export default function Notice() {
  return (
    <div className="center">
      <div className="header">
        <div className="first-row">
          <Back />
        </div>
        <div className="second-row">
          <span className="icon">
            <NotificationsActiveOutlinedIcon
              sx={{ fontSize: 30, color: "#fff" }}
            />
          </span>
          <span className="title">Notice</span>
        </div>
      </div>

      <div className="box">
        <div className="content"></div>
      </div>
      <Footer />
    </div>
  );
}
