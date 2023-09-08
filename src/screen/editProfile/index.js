import React, { useState } from 'react';
import './editProfile.css'; // Her we have  import your CSS file

function EditProfile() {
  const [formData, setFormData] = useState({
    CG_ID: '',
    CG_Email_Address: '',
    Password: '',
    Phone_Number: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can perform any necessary actions with the form data here, such as sending it to a server.
    console.log(formData);
  };

  return (
    <div className="App">
      <h1>Edit Profile</h1>
      <form onSubmit={handleSubmit}>
        <label>
          CG ID:
          <input
            type="text"
            name="CG_ID"
            value={formData.CG_ID}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          CG Email Address:
          <input
            type="email"
            name="CG_Email_Address"
            value={formData.CG_Email_Address}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="Password"
            value={formData.Password}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Phone Number:
          <input
            type="tel"
            name="Phone_Number"
            value={formData.Phone_Number}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default EditProfile;
