import React from "react";
import "../App.css";
import Back from "../Components/back";
import QuizOutlinedIcon from "@mui/icons-material/QuizOutlined";
import Footer from "../Components/Footer";

export default function Faqs() {
  return (
    <div className="center">
      <div className="header">
        <div className="first-row">
          <Back />
        </div>
        <div className="second-row">
          <span className="icon">
            <QuizOutlinedIcon sx={{ fontSize: 30, color: "#fff" }} />
          </span>
          <span className="title">FAQs</span>
        </div>
      </div>

      <div className="box">
        <div className="content"></div>
      </div>
      <Footer />
    </div>
  );
}
