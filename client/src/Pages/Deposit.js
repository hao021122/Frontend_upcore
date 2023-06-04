import React from "react";
import Back from "../Components/back";
import HistoryIcon from "@mui/icons-material/History";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

export default function Deposit() {
  return (
    <div className="center margin">
      <div className="header">
        <div className="first-row white flex-row space-between">
          <Back />
          <div className="big-title white">Deposit</div>
          <div className="icon">
            <HistoryIcon sx={{ fontSize: 30 }} />
          </div>
        </div>
      </div>
      <div className="bigBox">
        <div className="flex-row margin">
          <div className="deposit">TRC20</div>
          <div className="deposit">ERC20</div>
          <div className="deposit">BEP20</div>
        </div>
        <div className="box">
          <div className="big-title">Top Up USDT Wallet Address (TRC20)</div>
          <div className="flex-row space-between border-bottom">
            <div className="data">
              <p>thesyhfuj764724hydaty782gyh</p>
            </div>
            <div className="data">
              <span className="icon">
                <ContentCopyIcon />
              </span>
            </div>
          </div>
        </div>

        <div className="box">
          <div className="data border-bottom">
            <div className="text-align">TRC20</div>
          </div>
        </div>
      </div>
    </div>
  );
}
