import React, { useState } from 'react';
import './addNewInventoryscreen.css'; // Make sure to import your CSS file
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const  AddNewInventoryScreen = ()=> {
  const [formData, setFormData] = useState({
    Allocation_date: '',
    Inventory_Name: '',
    type: '',
    Sl_No: '',
    User_Name: '',
    Invoice: '',
    Tag_name: '',
    Working_status: '',
    User_Role: ''
  });
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
    .post("http://localhost:5000/addNewInventory",formData)
    .then((res) => {
     alert('New inventory added  ')
     navigate("/Dashboard");
    })
    .catch((e) => {
      alert(e?.message);
    });
  };

  return (
    <div className="App">
      <h1>Inventory Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Allocation Date:
          <input
            type="date"
            name="Allocation_date"
            value={formData.Allocation_date}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Inventory Name:
          <input
            type="text"
            name="Inventory_Name"
            value={formData.Inventory_Name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Type:
          <input
            type="text"
            name="type"
            value={formData.type}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Serial Number:
          <input
            type="text"
            name="Sl_No"
            value={formData.Sl_No}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          User Name:
          <input
            type="text"
            name="User_Name"
            value={formData.User_Name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Invoice:
          <input
            type="text"
            name="Invoice"
            value={formData.Invoice}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Tag Name:
          <input
            type="text"
            name="Tag_name"
            value={formData.Tag_name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Working Status:
          <input
            type="text"
            name="Working_status"
            value={formData.Working_status}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          User Role:
          <input
            type="text"
            name="User_Role"
            value={formData.User_Role}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddNewInventoryScreen;
