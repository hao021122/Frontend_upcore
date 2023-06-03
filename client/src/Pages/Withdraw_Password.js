import React from "react";
import "../App.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Back from "../Components/back";
import withdrawImage from "../assets/withdraw.svg";
import Footer from "../Components/Footer";

export default function Withdraw_Password() {
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
  return (
    <div className="center">
      <div className="withdraw-password-margin">
      <div className="header">
        <div className="first-row">
          <Back />
        </div>
        <div className="second-row">
          <span className="icon">
            <img className="icon-image" src={withdrawImage} />
          </span>
          <span className="title">Withdraw Password</span>
        </div>
        <Formik
          initialValues={initialValues}
          onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 500));
            alert(JSON.stringify(values, null, 2));
          }}
          validationSchema={validationSchema}
        >
          <Form className="formContainer grid">
            <p className="white">Change Login Password</p>
            <div className="box small left space-between withdraw-password-box">
              <span className="label withdraw-password-fontsize">Old Password</span>
              <Field
                id="password"
                name="oldPassword"
                type="password"
                placeholder="Type Password"
              />
            </div>
            <div className="box small right space-between">
              <span className="label withdraw-password-fontsize">New Password</span>
              <Field
                id="password"
                name="newPassword"
                type="password"
                placeholder="Type Password"
              />
            </div>
            <div className="box small left space-between">
              <span className="label withdraw-password-fontsize">Confirm New Password</span>
              <Field
                id="password"
                name="confirmNewPassword"
                type="password"
                placeholder="Type Password"
              />
            </div>
            <div className="button">
              <div className="sign-up full">Confirm</div>
            </div>
            <div className="flex">
        
        <span className="title white">
          Forgot the old password, please contact customer service to retrieve it
        </span>
      </div>
          </Form>
        </Formik>
      </div>
      </div>

      <Footer />
    </div>
  );
}
