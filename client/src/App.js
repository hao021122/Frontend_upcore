import "./App.css";
import { Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Success from "./Pages/success";
import Failed from "./Pages/failed";
import Terms from "./Pages/Terms";
import Certs from "./Pages/Cert";
import History from "./Pages/History";
import Bank from "./Pages/Bank";
import Levels from "./Pages/Levels";
import Aboutus from "./Pages/Aboutus";
import Contactus from "./Pages/Contactus";
import Faqs from "./Pages/Faqs";
import Event from "./Pages/Event";
import Withdraw1 from "./Pages/Withdraw1";
import Withdraw2 from "./Pages/Withdraw2";
import Notice from "./Pages/Notice";
import EditPersonal from "./Pages/Edit_Personal";
import WithdrawPassword from "./Pages/Withdraw_Password";
import Game from "./Pages/Game";
import Deposit from "./Pages/Deposit";
import Withdraw3 from "./Pages/Withdraw3";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/success" element={<Success />} />
        <Route path="/failed" element={<Failed />} />
        <Route path="/home" element={<Home />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/certs" element={<Certs />} />
        <Route path="/transaction_his" element={<History />} />
        <Route path="/bank_info" element={<Bank />} />
        <Route path="/levels" element={<Levels />} />
        <Route path="/about_us" element={<Aboutus />} />
        <Route path="/contact_us" element={<Contactus />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/events" element={<Event />} />
        <Route path="/withdraw_his" element={<Withdraw1 />} />
        <Route path="/withdraw_now" element={<Withdraw2 />} />
        <Route path="/withdraw" element={<Withdraw3 />} />
        <Route path="/notification" element={<Notice />} />
        <Route path="/change_profile" element={<EditPersonal />} />
        <Route path="/change_withdraw_pwd" element={<WithdrawPassword />} />
        <Route path="/game_start" element={<Game />} />
        <Route path="/deposit" element={<Deposit />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
