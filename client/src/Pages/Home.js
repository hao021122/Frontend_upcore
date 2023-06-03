import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import WhatsAppIcon from "../assets/whatsapp.png";
import termImage from "../assets/terms-black.svg";
import aboutImage from "../assets/about-black.svg";
import certImage from "../assets/Certificate-black.svg";
import withdrawImage from "../assets/withdraw-black.svg";
import bankImage from "../assets/bank-black.svg";
import faqImage from "../assets/faq.svg";
import eventImage from "../assets/event-black.svg";
import Bronze from "../assets/bronze.svg";
import Sliver from "../assets/silver.svg";
import Gold from "../assets/gold.svg";
import Footer from "../Components/Footer";
import copyImage from "../assets/copy.svg";

export default function Home() {
  const navigate = useNavigate();
  const handleToTerms = () => {
    navigate("/terms");
  };
  const handleToAboutUs = () => {
    navigate("/about_us");
  };
  const handleToCertificate = () => {
    navigate("/certs");
  };
  const handleToWithdraw = () => {
    navigate("/");
  };
  const handleToDeposit = () => {
    navigate("/bank_info");
  };
  const handleToFaqs = () => {
    navigate("/faqs");
  };
  const handelToEvent = () => {
    navigate("/events");
  };
  return (
    <div className="content">
      <div className="center">
        <div className="history margin">
          <div className="option">
            <img
              className="profile-image"
              src={Bronze}
              alt="User Profile Image"
            />
          </div>
          <div className="history-row1 flex-row space-between">
            <div>
              <span className="content-text">
                <p className="title white">Active Total Balance</p>
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
              <div className="title white">
                Party Code
              <img className="copy-icon" src={copyImage} />
              </div>
            </div>
            <div className="data">
              <div className="circle">
                <img
                  className="footer-image"
                  src={WhatsAppIcon}
                  alt="Whatsapp Icon"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="cardBox" onClick={handleToTerms}>
            <span className="icon">
              <img className="home-icon" src={termImage} alt="Terms Image" />
            </span>
            <span className="title">Terms</span>
          </div>
          <div className="cardBox" onClick={handleToAboutUs}>
            <span className="icon">
              <img
                className="home-icon"
                src={aboutImage}
                alt="About Us Image"
              />
            </span>
            <span className="title">About us</span>
          </div>
          <div className="cardBox" onClick={handleToCertificate}>
            <span className="icon">
              <img
                className="home-icon"
                src={certImage}
                alt="Certificate Image"
              />
            </span>
            <span className="title">Certificate</span>
          </div>
          <div className="cardBox">
            <span className="icon">
              <img className="home-icon" src={withdrawImage} />
            </span>
            <span className="title">Withdraw</span>
          </div>
          <div className="cardBox" onClick={handleToDeposit}>
            <span className="icon">
              <img className="home-icon" src={bankImage} alt="Deposit Image" />
            </span>
            <span className="title">Deposit</span>
          </div>
          <div className="cardBox" onClick={handleToFaqs}>
            <span className="icon">
              <img className="home-icon" src={faqImage} alt="FAQ image" />
            </span>
            <span className="title">FAQ</span>
          </div>
        </div>

        <div className="card2">
          <div className="cardBox" onClick={handelToEvent}>
            <span className="icon">
              <img className="home-icon" src={eventImage} />
            </span>
            <span className="title">Latest Event</span>
          </div>
        </div>

        <div className="card3">
          <div className="cardBox flex-row">
            <span className="icon">
              <img className="home-icon" src={Bronze} />
            </span>
            <span className="title">
              <p>Bronze Member</p>
              <div className="content">
              <p>0.25% profit per trade</p>
              <p>20 trades/day</p>
              </div>
            </span>
          </div>
          <div className="cardBox flex-row">
            <span className="icon">
              <img className="home-icon" src={Sliver} />
            </span>
            <span className="title">
              <p>Sliver Member</p>
              <div className="content">
                <p>0.30% profit per trade</p>
                <p>20 trades/day</p>
              </div>             
            </span>
          </div>
          <div className="cardBox flex-row">
            <span className="icon">
              <img className="home-icon" src={Gold} />
            </span>
            <span className="title">
              <p>Gold Member</p>
              <div className="content">
              <p>0.30% profit per trade</p>
              <p>20 trades/day</p>
              </div>
            </span>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
