import React from "react";
import Back from "../Components/back";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import Footer from "../Components/Footer";

export default function Terms() {
  return (
    <div className="center">
      <div className="header">
        <div className="first-row">
          <Back />
        </div>
        <div className="second-row">
          <span className="icon">
            <FactCheckIcon sx={{ fontSize: 30, color: "#fff" }} />
          </span>
          <span className="title">Terms</span>
        </div>
      </div>

      <div className="box">
        <div className="content"></div>
      </div>
      <Footer />
    </div>
  );
}
