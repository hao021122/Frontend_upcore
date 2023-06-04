import React from "react";
import Back from "../Components/back";
import HistoryIcon from "@mui/icons-material/History";
import Bronze from "../assets/bronze.svg";
import { Progress, Space } from "antd";
import WhatsAppIcon from "../assets/whatsapp.png";
import Footer from "../Components/Footer";

export default function Game() {
  const formatMoney = (percent) => {
    const amount = percent * 100; // Assuming the percentage represents a fraction of a total amount
    const formattedAmount = amount.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
    return (
      <div>
        <p className="white">{formattedAmount}</p>
        {/* <p>{percent * 100}%</p> */}
      </div>
    );
  };

  const formatDailyProfit = (percent) => {
    const currencySymbol = "$";
    const profit = percent * 1000; // Assuming the percentage represents daily profit
    return (
      <div>
        <p className="white">
          {currencySymbol}
          {profit.toLocaleString("en-US")}
        </p>
        <p className="white small-font">Daily Profit </p>
        {/* {formatMoney(percent)} */}
      </div>
    );
  };

  const formatAssetBalance = (percent) => {
    const currencySymbol = "$";
    const balance = percent * 100; // Assuming the percentage represents asset balance
    return (
      <div>
        <p className="white">
          {currencySymbol}
          {balance.toLocaleString("en-US", "USD")}
        </p>
        <p className="white small-font">Asset Balance</p>
        {/* {formatMoney(percent)} */}
      </div>
    );
  };
  return (
    <div>
      <div className="center">
        <div className="header">
          <div className="first-row white flex-row space-between">
            <Back />
            <div className="icon flex-row">
              <p>Transaction History</p>
              <HistoryIcon sx={{ fontSize: 30 }} />
            </div>
          </div>
        </div>

        <div className="content flex-row ">
          <span className="padding">
            <img
              className="profile-image"
              src={Bronze}
              alt="User Profile Image"
            />
          </span>
          <span className="content-text white padding">
            <p>Testing 123</p>
            <p>2023.01.01 - 00:00</p>
          </span>
        </div>
        <Space wrap className="">
          <div className="progress-container">
            <Progress
              type="circle"
              percent={25}
              format={() => formatMoney(8.88)}
              className="custom-progress"
              strokeWidth={10}
              strokeColor={{
                "0%": "#108ee9",
                "100%": "#87d068",
              }}
              size={200}
            />
          </div>
          <div className="flex-column space-between">
            <div className="progress-container">
              <Progress
                type="circle"
                percent={20}
                status="exception"
                format={() => formatDailyProfit(0.7)}
                className="custom-progress"
                strokeWidth={10}
                strokeColor={{
                  "0%": "#108ee9",
                  "100%": "#87d068",
                }}
                size={100}
              />
            </div>
            <div className="progress-container">
              <Progress
                type="circle"
                percent={20}
                format={() => formatAssetBalance(1)}
                className="custom-progress"
                strokeWidth={10}
                strokeColor={{
                  "0%": "#108ee9",
                  "100%": "#87d068",
                }}
                size={100}
              />
            </div>
          </div>
        </Space>
        <div className="button">
          <div className="sign-up">Start</div>
        </div>
        <div className="data flex-end">
          <div className="circle">
            <img
              className="footer-image"
              src={WhatsAppIcon}
              alt="Whatsapp Icon"
            />
          </div>
        </div>
        <div className="text-align">
          <p className="white small-font">Important Hint</p>
          <ul>
            <li className="white small-font">Working hours: 9:30 - 23:00</li>
            <li className="white small-font">
              For inquiries about applicants, please consult the agency
            </li>
          </ul>
        </div>
        <Footer />
      </div>
    </div>
  );
}
