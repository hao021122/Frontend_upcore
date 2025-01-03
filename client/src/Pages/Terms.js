import React from "react";
import Back from "../Components/back";
import Term from "../assets/terms.svg";
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
            <img className="icon-image" src={Term} />
          </span>
          <span className="title">Terms</span>
        </div>
      </div>

      <div className="box">
        <div className="content">
          <p>
            . Each account requires 40 sales to complete the-drive and a minimumn
            amount of SGD50 to performor reset. · A mobile number can onlya
            Drawndownbe registered once. · Please do not disclose theaccount
            password to anyone. The platforrm will notbe responsible for any
            damage caused. . If you continue to Drawndown funds within a short
            period oftime or if the amount is large, the account will befrozen
            and you will need to pay a fee for unblocking the account.· All sales
            are issued randomly by thesystem and cannot be changed,
            cancelled, controlled, skipped, eto. * Legal action will be takenin
            case of malicious account misuse, · Each sale is from a different
            seller, and there is no deposit formore than 5 minutes, and each
            deposit needs to be confrmed with the agency service and
            the seller's bank account.· The user needs tocomplete 40 sales
            within 8 hours after starting the task.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
