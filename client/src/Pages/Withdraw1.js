import React from "react";
import "../App.css";
import Back from "../Components/back";
import withdrawImage from "../assets/withdraw.svg";
import bankImage from "../assets/bank-black.svg";
import Footer from "../Components/Footer";


export default function Withdraw() {
  return (
    <div className="center">
      <div className="header">
        <div className="first-row">
          <Back />
        </div>
        <div className="second-row">
          <span className="icon">
            <img className="icon-image" src={withdrawImage} />
          </span>
          <span className="title">Withdraw</span>
        </div>
      </div>

      <div className="history">
        <div className="history-row1">
          <span className="content-text white">
            <p>Withdraw History</p>
            <p>$8,420.00</p>
          </span>
        </div>
        <div className="history-row2 flex-row space-between">
          <div className="data ">
            <span className="white">
              * You will receive your withdrawal within an hour
            </span>
          </div>
          <div className="data ">
            <span className="status successfully">Successfully</span>
          </div>
        </div>
      </div>

      <div className="bigBox">
        <div className="box">
          <div className="content space-between align-center">
            <span className="icon">
              <img className="image" src={bankImage} />
            </span>
            <span className="content-text">
              <p>2021-12-22 | 12:23 PM</p>
              <p className="dollar">200.00</p>
              <p>Withdraw Amount</p>
            </span>
            <span className="status pending right">Pending</span>
          </div>
        </div>
        <div className="box">
          <div className="content space-between align-center">
            <span className="icon">
              <img className="image" src={bankImage} />
            </span>
            <span className="content-text">
              <p>2021-12-22 | 12:23 PM</p>
              <p className="dollar">200.00</p>
              <p>Withdraw Amount</p>
            </span>
            <span className="status completed right">Completed</span>
          </div>
        </div>
        <div className="box">
          <div className="content space-between align-center">
            <span className="icon">
             <img className="image" src={bankImage} />
            </span>
            <span className="content-text">
              <p>2021-12-22 | 12:23 PM</p>
              <p className="dollar">200.00</p>
              <p>Withdraw Amount</p>
            </span>
            <span className="status rejected right">Rejected</span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
