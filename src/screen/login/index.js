import React, { useState } from 'react';
import './LoginScreen.css'; // Import your CSS file for styling
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginScreen = () => {
    const navigate = useNavigate();

  const [formData, setFormData] = useState({
    CG_ID: '',
    Password: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can perform actions like sending the data to a server for authentication
    axios
    .post("http://localhost:5000/login", formData)
    .then((res) => {
      alert("Login Done Successfully");
    //   navigate("/Login");
    })
    .catch((e) => {
       alert(e?.message);
    });
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
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
          <label>Password</label>
          <input
            type="password"
            name="Password"
            value={formData.Password}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <div style={{marginTop:30}}>
      <button onClick={()=>navigate('/Signup')}>Sign Up</button><br></br>

      <div style={{marginTop:30}}>
      <button onClick={()=>navigate('/ForgetPassword')}>Forgot Password</button><br></br>
      </div>
      </div>
    </div>
  );
};

export default LoginScreen;
