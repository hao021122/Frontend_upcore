import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Logo from "../assets/logo.svg";

export default function Register() {
  const [isChecked, setIsChecked] = useState(false);
  const initialValues = {
    username: "",
    password: "",
    phoneNumber: "",
    withdrawPassword: "",
    partyCode: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().min(3).max(15).required("Please Enter Username!!"),
    password: Yup.string()
      .min(4)
      .max(12)
      .required("Please Enter Your Password."),
    phoneNumber: Yup.string()
      .min(10)
      .max(11)
      .required("Please Enter Phone Number."),
    withdrawPassword: Yup.string()
      .min(8)
      .max(12)
      .required("Please Enter Withdraw Password."),
    partyCode: Yup.string(),
  });

  const onSubmit = (data) => {
    axios.post("http://localhost:3100/auth", data).then((response) => {
      console.log(data);
    });
  };

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div className="center register">
      <img className="logo" src={Logo} />

      <div className="welcome register-text">
        <p>Create</p>
        <p>Your Account</p>
      </div>

      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="formContainer">
          <ErrorMessage className="errorMsg" name="username" component="span" />
          <Field
            autoComplete="off"
            // id="inputCreatePost"
            type="text"
            name="username"
            placeholder="Username"
          />
          <ErrorMessage className="errorMsg" name="password" component="span" />
          <Field
            autoComplete="off"
            // id="inputCreatePost"
            type="password"
            name="password"
            placeholder="Password"
          />
          <ErrorMessage
            className="errorMsg"
            name="phoneNumber"
            component="span"
          />
          <Field
            autoComplete="off"
            // id="inputCreatePost"
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
          />
          <ErrorMessage
            className="errorMsg"
            name="withdrawPassword"
            component="span"
          />
          <Field
            autoComplete="off"
            // id="inputCreatePost"
            type="password"
            name="withdrawPassword"
            placeholder="Withdraw Password"
          />
          <ErrorMessage
            className="errorMsg"
            name="partyCode"
            component="span"
          />
          <Field
            autoComplete="off"
            // id="inputCreatePost"
            type="text"
            name="partyCode"
            placeholder="Party Code"
          />
          <div className="checkbox-field">
            <Field
              type="checkbox"
              name="agreement"
              id="agreement"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="agreement">
              I agree to the User (Terms & Conditions)
            </label>
          </div>
          <div className="button" disabled={!isChecked}>
            <div className="sign-up">Register</div>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
