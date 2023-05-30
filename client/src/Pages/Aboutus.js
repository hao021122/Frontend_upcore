import React from "react";
import "../App.css";
import Back from "../Components/back";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Footer from "../Components/Footer";

export default function Aboutus() {
  return (
    <div className="center">
      <div className="header">
        <div className="first-row">
          <Back />
        </div>
        <div className="second-row">
          <span className="icon">
            <InfoOutlinedIcon sx={{ fontSize: 30, color: "#fff" }} />
          </span>
          <span className="title">About us</span>
        </div>
      </div>

      <div className="box">
        <div className="content"></div>
      </div>
      <Footer />
    </div>
  );
}
