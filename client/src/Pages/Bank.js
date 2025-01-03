import React from "react";
import "../App.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Back from "../Components/back";
import bankImage from "../assets/bank.svg";
import Footer from "../Components/Footer";

export default function Bank() {
  const initialValues = {
    fullName: "",
    bankAccountNumber: "",
    bankName: "",
  };

  const validationSchema = Yup.object().shape({
    fullName: Yup.string().min(3).max(50).required("Please Enter Full Name"),
    bankAccountNumber: Yup.string()
      .min(10)
      .max(10)
      .required("Please Enter Bank Account Name"),
    bankName: Yup.string().required("Please Enter Bank Name"),
  });

  return (
    <div className="center">     
      <div className="header">
      <div className="bank-margin">
        <div className="first-row">
          <Back />
        </div>
        <div className="second-row">
          <div className="icon">
            <img className="icon-image" src={bankImage} />
          </div>
          <div className="title">Deposit</div>
        </div>
        <div className="third-row">
          <p>
            Dear users, in order to protect the security of your fund, 
            <br></br>please do not enter your bank card password. 
            <br></br>Our staff will not ask you to enter your bank card PIN.
          </p>
        </div>
      </div>
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
          <ErrorMessage className="errorMsg" name="fullName" component="span" />
          <div className="input-field space-between">
            <Field
              autoComplete="off"
              type="text"
              name="fullName"
              placeholder="Full Name"
            />
          </div>
          <div className="checkbox-group">
            <label className="white">
              <Field type="checkbox" name="wallet" className="wallet" />
              Wallet Address
            </label>
            <label className="white">
              <Field type="checkbox" name="bank" className="bank" />
              Bank Card
            </label>
          </div>

          <ErrorMessage
            className="errorMsg"
            name="bankAccountNumber"
            component="span"
          />
          <div className="input-field space-between">
            <Field
              autoComplete="off"
              type="text"
              name="bankAccountNumber"
              placeholder="Bank Account Number"
            />
          </div>
          <ErrorMessage className="errorMsg" name="bankName" component="span" />
          <div className="input-field space-between">
            <Field
              autoComplete="off"
              type="text"
              name="bankName"
              placeholder="Bank Name"
            />
          </div>

          <div className="button">
            <div className="sign-up">Confirm</div>
          </div>
        </Form>
      </Formik>
      <Footer />
    </div>
  );
}
