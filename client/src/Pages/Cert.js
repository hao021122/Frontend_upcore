import React from "react";
import "../App.css";
import Back from "../Components/back";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import Footer from "../Components/Footer";

export default function Cert() {
  return (
    <div className="center">
      <div className="header">
        <div className="first-row">
          <Back />
        </div>
        <div className="second-row">
          <span className="icon">
            <WorkspacePremiumIcon sx={{ fontSize: 30, color: "#fff" }} />
          </span>
          <span className="title">Certificates</span>
        </div>
      </div>

      <div className="box">
        <div className="content"></div>
      </div>
      <Footer />
    </div>
  );
}
