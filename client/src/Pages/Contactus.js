import React from "react";
import "../App.css";
import Back from "../Components/back";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import Footer from "../Components/Footer";

export default function Contactus() {
  return (
    <div className="center">
      <div className="header">
        <div className="first-row">
          <Back />
        </div>
        <div className="second-row">
          <span className="icon">
            <CallOutlinedIcon sx={{ fontSize: 30, color: "#fff" }} />
          </span>
          <span className="title">Contact us</span>
        </div>
      </div>

      <div className="bigBox">
        <div className="box small left">
          <div className="content">
            <p>We're here for you! How can I help?</p>
          </div>
        </div>
        <div className="box small right">
          <div className="content">
            <p>I hope...</p>
          </div>
        </div>

        <div className="box">
          <div className="content flex align-center">
            <h1>Let's Join Us Now</h1>
            <p>If user has any enquiry, kindly contact the Support Service</p>
            <div className="button">
              <div className="sign-up">Direct to WhatsApp</div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
