import React from "react";
import "../App.css";
import Back from "../Components/back";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import TelegramIcon from "@mui/icons-material/Telegram";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import Footer from "../Components/Footer";

export default function History() {
  return (
    <div className="center">
      <div className="header">
        <div className="first-row">
          <Back />
        </div>
        <div className="second-row">
          <span className="icon">
            <HistoryOutlinedIcon sx={{ fontSize: 30, color: "#fff" }} />
          </span>
          <span className="title">Transactions Histories</span>
        </div>
      </div>
      <div className="bigBox">
        <div className="box">
          <div className="option">
            <MoreHorizOutlinedIcon />
          </div>
          <div className="content">
            <span className="icon">
              <TelegramIcon />
            </span>
            <span className="content-text">
              <p>Family Mart</p>
              <p>Checking - 9560</p>
            </span>
          </div>
          <div className="box-footer">
            <div className="data">
              <div className="data-top">
                <span>Today Profit</span>
              </div>
              <div className="data-bottom">
                <span className="datetime">2021-12-22 | 12:23 PM</span>
                <span className="status pending">Pending</span>
              </div>
            </div>
          </div>
        </div>

        <div className="box">
          <div className="option">
            <MoreHorizOutlinedIcon />
          </div>
          <div className="content">
            <span className="icon">
              <FacebookIcon />
            </span>
            <span className="content-text">
              <p>RBL Bank</p>
              <p>Checking - 9560</p>
            </span>
          </div>
          <div className="box-footer">
            <div className="data">
              <div className="data-top">
                <span>Today Profit</span>
              </div>
              <div className="data-bottom">
                <span className="datetime">2021-12-22 | 12:23 PM</span>
                <span className="status completed">Completed</span>
              </div>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="option">
            <MoreHorizOutlinedIcon />
          </div>
          <div className="content">
            <span className="icon">
              <InstagramIcon />
            </span>
            <span className="content-text">
              <p>HDFC Bank</p>
              <p>Checking - 9560</p>
            </span>
          </div>
          <div className="box-footer">
            <div className="data">
              <div className="data-top">
                <span>Today Profit</span>
              </div>
              <div className="data-bottom">
                <span className="datetime">2021-12-22 | 12:23 PM</span>
                <span className="status rejected">Rejected</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
