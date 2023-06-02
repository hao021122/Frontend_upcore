import React from "react";
import "../App.css";
import Logo from "../assets/logo.svg";
import { Link, useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };
  return (
    <div className="center">
      <div className="logo">
        <img src={Logo} />
      </div>

      <div className="welcome">
        <p>Welcome</p>
      </div>

      <div className="button">
        <div className="sign-up" onClick={handleLogin}>
          Sign in
        </div>
        <div className="link">
          <Link to="/register">Create a new account</Link>
        </div>
      </div>
    </div>
  );
}
