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
import Withdraw from "./Pages/Withdraw";
import Notice from "./Pages/Notice";
import Edit_Personal from "./Pages/Edit_Personal";
import Withdraw_Password from "./Pages/Withdraw_Password";

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
        <Route path="/withdraw" element={<Withdraw />} />
        <Route path="/notification" element={<Notice />} />
        <Route path="/change_profile" element={<Edit_Personal />} />
        <Route path="/change_withdraw_pwd" element={<Withdraw_Password />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
