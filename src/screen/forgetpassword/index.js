import React, { useState } from "react";
import "./ForgetPasswordScreen.css"; // Import your CSS file for styling
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ForgotPasswordScreen = () => {
  const [CG_Email_Address, setEmail] = useState("");
  const [Otp, setOtp] = useState();

  const [otpStatus, setOtpStatus] = useState(false);
  const [otpValidTime,setOtpValidTime] = useState()
  const [getTime, setGetTime] = useState(10)
  const navigate = useNavigate();


  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleOtpChange = (event) => {
    setOtp(event.target.value);
  };

  const timer = ()=>{
    setInterval(() => {
    if(getTime>0){
    setGetTime(getTime-1)
    }
    }, 10000);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can perform actions like sending a password reset email
    axios
      .post("http://localhost:5000/forgetPassword", {
        CG_Email_Address: CG_Email_Address,
      })
      .then((res) => {
        setOtpStatus(true);
        console.log(res);
        alert(`This Is otp please do screenshot${res.data.verficationOtp}`)
         setOtpValidTime(res.data.validFor)
         timer()
      })
      .catch((e) => {
        setOtpStatus(false);
        alert(e?.message);
      });
  };

  const handleotp = (event) => {
    event.preventDefault();
    // Here you can perform actions like sending a password reset email
    axios
      .post("http://localhost:5000/verifyOTP", {
        CG_Email_Address: CG_Email_Address,
        otp: Otp
      })
      .then((res) => {
       alert('Otp Is valid Please change password now')
       navigate("/SetNewPassword");
      })
      .catch((e) => {
        alert(e?.message);
      });
  };


  return (
    <div className="forgot-password-container">
      <h2>Forgot Password</h2>
      <p>Please enter your registered email address to reset your password.</p>
      <form onSubmit={ otpStatus ? handleotp : handleSubmit}>
        <div className="form-group">
          <label>Email Address</label>
          <input
            type="email"
            placeholder="Enter Email"
            value={CG_Email_Address}
            onChange={handleEmailChange}
            required
          />
          {otpStatus && (
            <React.Fragment>
            <label>{`Otp Valid for : ${getTime} `}</label>
              <label>Enter Otp </label>
              <input
                type="otp"
                placeholder="Enter Otp"
                value={Otp}
                onChange={handleOtpChange}
                required
              />
            </React.Fragment>
          )}
        </div>
        {otpStatus ? (
          <button type="submit">Reset Password</button>
        ) : (
          <button type="submit">Generate Otp</button>
        )}
      </form>
    </div>
  );
};

export default ForgotPasswordScreen;
