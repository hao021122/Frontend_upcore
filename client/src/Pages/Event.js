import React from "react";
import "../App.css";
import Back from "../Components/back";
import EventNoteIcon from "@mui/icons-material/EventNote";
import Footer from "../Components/Footer";

export default function Event() {
  return (
    <div className="center">
      <div className="header">
        <div className="first-row">
          <Back />
        </div>
        <div className="second-row">
          <span className="icon">
            <EventNoteIcon sx={{ fontSize: 30, color: "#fff" }} />
          </span>
          <span className="title">Latest Event</span>
        </div>
      </div>

      <div className="box">
        <div className="content"></div>
      </div>
      <Footer />
    </div>
  );
}
