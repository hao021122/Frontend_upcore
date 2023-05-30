import React from "react";
import "../App.css";
import GavelIcon from "@mui/icons-material/Gavel";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import VerifiedIcon from "@mui/icons-material/Verified";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import QuizIcon from "@mui/icons-material/Quiz";
import EventNoteIcon from "@mui/icons-material/EventNote";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import Footer from "../Components/Footer";

export default function Home() {
  return (
    <div className="content">
      <div className="center">
        <div className="card">
          <div className="cardBox">
            <span className="icon">
              <GavelIcon fontSize="large" />
            </span>
            <span className="title">Terms</span>
          </div>
          <div className="cardBox">
            <span className="icon">
              <PeopleAltIcon fontSize="large" />
            </span>
            <span className="title">About us</span>
          </div>
          <div className="cardBox">
            <span className="icon">
              <VerifiedIcon fontSize="large" />
            </span>
            <span className="title">Certificate</span>
          </div>
          <div className="cardBox">
            <span className="icon">
              <LocalAtmIcon fontSize="large" />
            </span>
            <span className="title">Withdraw</span>
          </div>
          <div className="cardBox">
            <span className="icon">
              <AccountBalanceIcon fontSize="large" />
            </span>
            <span className="title">Bank</span>
          </div>
          <div className="cardBox">
            <span className="icon">
              <QuizIcon fontSize="large" />
            </span>
            <span className="title">FAQ</span>
          </div>
        </div>

        <div className="card two">
          <div className="cardBox">
            <span className="icon">
              <EventNoteIcon fontSize="large" />
            </span>
            <span className="title">Latest Event</span>
          </div>
          <div className="cardBox">
            <span className="icon">
              <EventAvailableIcon fontSize="large" />
            </span>
            <span className="title">Check In</span>
          </div>
        </div>

        <div className="card small">
          <div className="cardBox">
            <span className="icon"></span>
            <span className="title">Bronze Member</span>
          </div>
          <div className="cardBox">
            <span className="icon"></span>
            <span className="title">Sliver Member</span>
          </div>
          <div className="cardBox">
            <span className="icon"></span>
            <span className="title">Gold Member</span>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
