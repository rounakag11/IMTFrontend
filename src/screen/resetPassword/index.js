import React, { useState } from 'react';
import './SetNewPasswordScreen.css'; // Import your CSS file for styling
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SetNewPasswordScreen = () => {
  const [formData, setFormData] = useState({
    CG_ID: '',
    New_Password: '',
    Confirm_New_Password: ''
  });
  const navigate = useNavigate();


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can perform actions like updating the password in the backend
    axios
    .post("http://localhost:5000/verifyOTP",formData)
    .then((res) => {
     alert('Otp Is change please do login again')
     navigate("/Login");
    })
    .catch((e) => {
      alert(e?.message);
    });
  };

  return (
    <div className="set-new-password-container">
      <h2>Set New Password</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>CG ID</label>
          <input
            type="text"
            name="CG_ID"
            value={formData.CG_ID}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>New Password</label>
          <input
            type="password"
            name="New_Password"
            value={formData.New_Password}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Confirm New Password</label>
          <input
            type="password"
            name="Confirm_New_Password"
            value={formData.Confirm_New_Password}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Set Password</button>
      </form>
    </div>
  );
};

export default SetNewPasswordScreen;
