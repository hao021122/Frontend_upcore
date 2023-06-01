import React, { useState } from "react";
import "../App.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import axios from "axios";
import Logo from "../assets/logo.svg";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().min(3).max(15).required("Please enter a username"),
    password: Yup.string()
      .min(4)
      .max(12)
      .required("Please enter your password"),
  });

  const onSubmit = (data) => {
    axios.post("http://localhost:3100/auth", data).then((response) => {
      console.log(data);
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className="center login">
      <img className="logo" src={Logo} alt="Logo" />

      <div className="welcome register-text">
        <h1>Login to</h1>
        <h1>Your Account</h1>
        <p>Sign With Username or email and</p>
        <p>password to use your account</p>
      </div>

      <Formik
        initialValues={initialValues}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
        validationSchema={validationSchema}
      >
        <Form className="formContainer">
          <Field
            id="username"
            name="username"
            type="text"
            placeholder="Username"
          />
          <Field
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
          />
          <span className="toggle-password" onClick={togglePasswordVisibility}>
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </span>

          <div className="button">
            <div className="sign-up">Sign in</div>
            <div className="sign-up use-phone">
              <Link to="/register">Create Account</Link>
            </div>
          </div>
        </Form>
      </Formik>
      <div className="link opt">
        <Link className="links" to="/">
          Forget Password
        </Link>
      </div>
    </div>
  );
}
