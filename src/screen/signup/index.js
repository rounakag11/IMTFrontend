import React, { useState } from "react";
import "./SignUp.css"; // Import your CSS file for styling
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignupScreen = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    CG_ID: "",
    CG_Email_Address: "",
    Full_Name: "",
    Phone_Number: "",
    Password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can perform actions like sending the data to a server for registration
    axios
      .post("http://localhost:5000/signup", formData)
      .then((res) => {
        alert("User Has created, Please Login ");
        navigate("/Login");
      })
      .catch((e) => {
        console.log(e)
        alert(e?.message);
      });
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>CG ID (8 digits*)</label>
          <input
            type="text"
            placeholder="Enter Your CG ID"
            name="CG_ID"
            value={formData.CG_ID}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email Address *</label>
          <input
            type="email"
            placeholder="Enter Your Email Address"
            name="CG_Email_Address"
            value={formData.CG_Email_Address}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Full Name*</label>
          <input
            type="text"
            placeholder="Enter Your Full Name"
            name="Full_Name"
            value={formData.Full_Name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Phone Number*</label>
          <input
            type="tel"
            placeholder="Enter Your Phone Number"
            name="Phone_Number"
            value={formData.Phone_Number}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>
            Password* (minimum 8 characters, at least one digit and one special
            character)
          </label>
          <input
            type="password"
            placeholder="Enter Your Password"
            name="Password"
            value={formData.Password}
            onChange={handleInputChange}
            required
          />
        </div>

        <button type="submit">Sign Up</button>
      </form>
      <div style={{ marginTop: 30 }}>
        <button onClick={() => navigate("/Login")}>
          Already have an account? Login
        </button>
      </div>
    </div>
  );
};

export default SignupScreen;
