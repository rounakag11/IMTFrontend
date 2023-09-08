import React from 'react';
import './Dashboard.css'; // Here we have  import your CSS file
import { useNavigate } from 'react-router-dom';

function Dashboard() {
    const navigate = useNavigate();
  return (
    <div className="Dashboard">
      <h1>Welcome to Your Inventory Dashboard</h1>
      <div className="ButtonContainer">
        <button className="ActionButton" onClick={()=>{navigate('/editProfile')}}>Edit Profile</button>
        <button className="ActionButton" onClick={()=>{navigate('/inventoryList')}}>Inventory Requests</button>
        <button className="ActionButton" onClick={()=>{navigate('/addNewInventory')}}>Add Inventory</button>
        <button className="ActionButton" onClick={()=>{navigate('/modifiedInventory')}}>Edit Inventory</button>
      </div>
    </div>
  );
}

export default Dashboard;
