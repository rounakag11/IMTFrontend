import React, { useState } from 'react';
import "./editProfile.css"; // Import your CSS file for styli
import axios from 'axios';

function EditProfile() {
  const [CG_ID, setCG_ID] = useState('');
  const [CG_Email_Address, setCG_Email_Address] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  const handleEditProfile = async () => {
    try {
      const response = await axios.put(`/editProfile/${CG_ID}`, {
        CG_ID,
        CG_Email_Address,
        password,
        phone
      });

      console.log(response.data.message);
      // You can perform additional actions after successfull update

    } catch (error) {
      console.error('Error updating profile:', error.response.data.message);
      // Handle errors here
    }
  };

  return (
    <div>
      <h2>Edit Profile</h2>
      <div>
        <label>CG_ID:</label>
        <input type="text" value={CG_ID} onChange={(e) => setCG_ID(e.target.value)} />
      </div>
      <div>
        <label>CG_Email_Address:</label>
        <input type="email" value={CG_Email_Address} onChange={(e) => setCG_Email_Address(e.target.value)} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div>
        <label>Phone Number:</label>
        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
      </div>
      <button onClick={handleEditProfile}>Update Profile</button>
    </div>
  );
}

export default EditProfile;
