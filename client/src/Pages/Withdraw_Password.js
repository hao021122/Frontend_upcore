import React from "react";
import "../App.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Back from "../Components/back";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
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
      <div className="header">
        <div className="first-row">
          <Back />
        </div>
        <div className="second-row">
          <span className="icon">
            <InfoOutlinedIcon sx={{ fontSize: 30, color: "#fff" }} />
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
            <p>Change Login Password</p>
            <div className="box left space-between">
              <span className="label">Old Password</span>
              <Field
                id="password"
                name="oldPassword"
                type="password"
                placeholder="Type Password"
              />
            </div>
            <div className="box right space-between">
              <span className="label">New Password</span>
              <Field
                id="password"
                name="newPassword"
                type="password"
                placeholder="Type Password"
              />
            </div>
            <div className="box left space-between">
              <span className="label">Confirm New Password</span>
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
          </Form>
        </Formik>
      </div>

      <Footer />
    </div>
  );
}
