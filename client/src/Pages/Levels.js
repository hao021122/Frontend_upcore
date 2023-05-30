import React from "react";
import "../App.css";
import Back from "../Components/back";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import Footer from "../Components/Footer";

export default function Levels() {
  return (
    <div className="center">
      <div className="header">
        <div className="first-row">
          <Back />
        </div>
        <div className="second-row">
          <span className="icon">
            <PersonOutlineOutlinedIcon sx={{ fontSize: 30, color: "#fff" }} />
          </span>
          <span className="title">VIP Levels</span>
        </div>
      </div>

      <div className="bigBox">
        <div className="box">
          <div className="content">
            <span className="icon"></span>
            <span className="content-text">
              <p>Bronze Level</p>
              <p className="dollar">USTD 100.00</p>
              <p>0.25% profit per transactions, 1</p>
              <p>withdrawal after completing 20</p>
              <p>transactions per day, 0% handling fee</p>
            </span>
          </div>
        </div>
        <div className="box">
          <div className="content">
            <span className="icon"></span>
            <span className="content-text">
              <p>Sliver Level</p>
              <p className="dollar">USTD 200.00</p>
              <p>0.30% profit per transactions. Complete</p>
              <p>20 transactions every day, can</p>
              <p>withdraw 1 time, fee 3%</p>
            </span>
          </div>
        </div>
        <div className="box">
          <div className="content">
            <span className="icon"></span>
            <span className="content-text">
              <p>Gold Level</p>
              <p className="dollar">USTD 300.00</p>
              <p>0.35% profit per transactions. Complete</p>
              <p>30 transactions every day, can</p>
              <p>withdraw 2 time, 2% handling fee</p>
            </span>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
