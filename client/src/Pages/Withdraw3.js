import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Back from "../Components/back";
import HistoryIcon from "@mui/icons-material/History";
import Success from "../assets/tick.svg";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export default function Withdaraw3() {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };
  const initialValues = {
    withdrawAmount: "",
    walletAddress: "",
    transactionPassword: "",
  };

  const validationSchema = Yup.object().shape({
    withdrawAmount: Yup.number().required("Please Enter Withdraw Amount"),
    walletAddress: Yup.string()
      .min(10)
      .max(10)
      .required("Please Enter Bank Account Name"),
    transactionPassword: Yup.string().required("Please Enter Password"),
  });
  return (
    <div className="center margin">
      <div className="header">
        <div className="first-row white flex-row space-between">
          <Back />
          <div className="big-title white">Withdraw</div>
          <div className="icon">
            <HistoryIcon sx={{ fontSize: 30 }} />
          </div>
        </div>
      </div>

      <div className="box margin">
        <div className="big-title">Bonus Point Balance</div>
        <div className="flex-row space-between border-bottom">
          <div className="data">
            <div className="dollar">5.0 USDT</div>
          </div>
          <div className="data">
            <span className="icon">
              <img className="footer-image" src={Success} />
            </span>
          </div>
        </div>
      </div>

      <Formik initialValues={initialValues} validationSchema={validationSchema}>
        <Form className="formContainer">
          <label className="label-field white">Withdraw Amount</label>
          <div className="input-field space-between">
            <Field
              autoComplete="off"
              type="number"
              name="withdrawAmount"
              placeholder="Withdraw Amount"
            />
          </div>
          <label className="label-field white">Wallet Address</label>
          <div className="input-field space-between">
            <Field
              autoComplete="off"
              type="text"
              name="walletAddress"
              placeholder="Wallet Address"
            />
          </div>
          <label className="label-field white">Transaction Password</label>
          <div className="input-field space-between">
            <Field
              autoComplete="off"
              type={showPassword ? "text" : "password"}
              name="transactionPassword"
              placeholder="Transaction Password"
            />
            <span
              className="toggle-password"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </span>
          </div>
          <div className="header">
            <div className="first-row">
              <p className="white">Noted: -</p>
              <p className="white">
                Withdraw fee 5 USDT or 5 % whichever higher, Min. Withdaraw
                Amount: 10
              </p>
            </div>
          </div>
          <div className="button">
            <div className="sign-up create-account">
              <p className="white">Submit</p>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
