import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import WhatsAppIcon from "../assets/whatsapp.png";
import termImage from "../assets/terms.svg";
import aboutImage from "../assets/about.svg";
import certImage from "../assets/Certificate.svg";
import withdrawImage from "../assets/withdraw.svg";
import bankImage from "../assets/bank.svg";
import faqImage from "../assets/faq.svg";
import eventImage from "../assets/event.svg";
import Bronze from "../assets/bronze.svg";
import Sliver from "../assets/silver.svg";
import Gold from "../assets/gold.svg";
import Footer from "../Components/Footer";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="content">
      <div className="center">
        <div className="history margin">
          <div className="option">
            <img className="profile-image" src={Bronze} />
          </div>
          <div className="history-row1 flex-row space-between">
            <div>
              <span className="content-text">
                <p className="title">Active Total Balance</p>
                <p className="dollar">$8,888.00</p>
              </span>
            </div>
            <div>
              <span className="button">
                <div className="status successfully">Testing123</div>
              </span>
            </div>
          </div>
          <div className="history-row2 flex-row space-between">
            <div className="data">
              <div className="title">Party Code</div>
            </div>
            <div className="data">
              <div className="circle">
                <img className="footer-image" src={WhatsAppIcon} />
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="cardBox">
            <span className="icon">
              <img className="home-icon" src={termImage} />
            </span>
            <span className="title">Terms</span>
          </div>
          <div className="cardBox">
            <span className="icon">
              <img className="home-icon" src={aboutImage} />
            </span>
            <span className="title">About us</span>
          </div>
          <div className="cardBox">
            <span className="icon">
              <img className="home-icon" src={certImage} />
            </span>
            <span className="title">Certificate</span>
          </div>
          <div className="cardBox">
            <span className="icon">
              <img className="home-icon" src={withdrawImage} />
            </span>
            <span className="title">Withdraw</span>
          </div>
          <div className="cardBox">
            <span className="icon">
              <img className="home-icon" src={bankImage} />
            </span>
            <span className="title">Deposit</span>
          </div>
          <div className="cardBox">
            <span className="icon">
              <img className="home-icon" src={faqImage} />
            </span>
            <span className="title">FAQ</span>
          </div>
        </div>

        <div className="card one">
          <div className="cardBox">
            <span className="icon">
              <img className="home-icon" src={eventImage} />
            </span>
            <span className="title">Latest Event</span>
          </div>
        </div>

        <div className="card">
          <div className="cardBox flex-row">
            <span className="icon">
              <img className="home-icon" src={Bronze} />
            </span>
            <span className="title">
              <p>Bronze Member</p>
              <p>0.25% profit per trade</p>
              <p>20 trades/day</p>
            </span>
          </div>
          <div className="cardBox flex-row">
            <span className="icon">
              <img className="home-icon" src={Sliver} />
            </span>
            <span className="title">
              <p>Sliver Member</p>
              <p>0.30% profit per trade</p>
              <p>20 trades/day</p>
            </span>
          </div>
          <div className="cardBox flex-row">
            <span className="icon">
              <img className="home-icon" src={Gold} />
            </span>
            <span className="title">
              <p>Gold Member</p>
              <p>0.30% profit per trade</p>
              <p>20 trades/day</p>
            </span>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
