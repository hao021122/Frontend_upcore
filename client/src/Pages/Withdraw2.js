import React from "react";
import "../App.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Back from "../Components/back";
import withdrawImage from "../assets/withdraw.svg";
import Success from "../assets/tick.svg";
import Footer from "../Components/Footer";

export default function Withdraw() {
  const initialValues = {
    withdrawAmount: "",
    withdrawPassword: "",
  };

  const validationSchema = Yup.object().shape({
    withdrawAmount: Yup.number().required("Please Enter Amount"),
    withdrawPassword: Yup.string()
      .min(4)
      .max(12)
      .required("Please Enter Withdraw Password"),
  });
  return (
    <div className="center">
      <div className="header">
        <div className="first-row">
          <Back />
        </div>
        <div className="second-row">
          <span className="icon">
            <img className="icon-image" src={withdrawImage} />
          </span>
          <span className="title">Withdraw</span>
        </div>
      </div>

      <div className="history">
        <div className="history-row1 flex-row space-between">
          <div>
            <span className="content-text white">
              <p>Withdraw Now</p>
              <p>$8,420.00</p>
            </span>
          </div>
          <div>
            <span className="icon">
              <img className="footer-image" src={Success} />
            </span>
          </div>
        </div>
        <div className="history-row2 flex-row space-between">
          <div className="data white">
            <span className="white">21 July 2020, 10:38 AM</span>
          </div>
          <div className="data white">
            <span className="status successfully">Successfully</span>
          </div>
        </div>
      </div>

      <Formik initialValues={initialValues} validationSchema={validationSchema}>
        <Form className="formContainer">
          <ErrorMessage
            className="errorMsg"
            name="withdrawAmount"
            component="span"
          />
          <div className="input-field space-between withdraw-input-field">
            <div className="flex">
          <span className="withdraw-label">Withdraw Amount</span>
            <Field
              autoComplete="off"
              // id="inputCreatePost"
              type="number"
              name="withdrawAmount"
              placeholder="TYPE HERE"
            />
            </div>
          </div>
          <ErrorMessage
            className="errorMsg"
            name="withdrawPassword"
            component="span"
          />
          <div className="input-field space-between withdraw-input-field">
            <div className="flex">          
          <span className="withdraw-label">Withdraw Password</span>
            <Field
              autoComplete="off"
              // id="inputCreatePost"
              type="text"
              name="withdrawPassword"
              placeholder="TYPE HERE"
            /> 
            </div>
          </div>
        </Form>
      </Formik>
      <div className="flex">
        <span className="big-title white">Withdraw Method</span>
        <span className="title white">
          Withdrawal will be transferred to Crypto Wallet
        </span>
      </div>
      <Footer />
    </div>
  );
}
