import React, { useState } from "react";
import "../App.css";
import Back from "../Components/back";
import QuizOutlinedIcon from "@mui/icons-material/QuizOutlined";
import Footer from "../Components/Footer";

export default function Faqs() {
  const [activeTab, setActiveTab] = useState(0);
  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  const tabs = [
    {
      title: "Credit",
      content: (
        <div>
          Please do not use the same personal bank cardinformation to register
          repeatedly. Once found, itwill be processed for a specifc
          account.Personal multi-account driving sales will lead to
          thesuspension of the seller&#39;s store, aecting theseller&#39;s
          reputation, and the sales and sales willbe invalid. The platform
          prohibits one card frombeing bound to multiple accounts. Do not
          usemultiple personal accounts. One card bound tomultiple accounts will
          cause the funds to be frozenfor 90 days and the account will be
          permanentlyfrozen! The platform is designed to prevent peoplefrom
          maliciously laundering money or cashing out arange of misconduct
        </div>
      ),
    },
    {
      title: "Mission",
      content: (
        <div>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </div>
      ),
    },
    {
      title: "Drawndown",
      content: (
        <div>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </div>
      ),
    },
    {
      title: "Partner",
      content: (
        <div>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </div>
      ),
    },
  ];
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
        <div className="content flex-column">
          <p className="big-title">Tips</p>
          <p>
            Please do not use the same personal bank cardinformation to register
            repeatedly. Once found, itwill be processed for a specifc
            account.Personal multi-account driving sales will lead to
            thesuspension of the seller&#39;s store, aecting theseller&#39;s
            reputation, and the sales and sales willbe invalid. The platform
            prohibits one card frombeing bound to multiple accounts. Do not
            usemultiple personal accounts. One card bound tomultiple accounts
            will cause the funds to be frozenfor 90 days and the account will be
            permanentlyfrozen! The platform is designed to prevent peoplefrom
            maliciously laundering money or cashing out arange of misconduct
          </p>
          <div className="tabs">
            <div className="tab-header">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  className={`tab-button ${
                    activeTab === index ? "active" : ""
                  }`}
                  onClick={() => handleTabClick(index)}
                >
                  {tab.title}
                </button>
              ))}
            </div>
            <div className="tab-content">{tabs[activeTab].content}</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
