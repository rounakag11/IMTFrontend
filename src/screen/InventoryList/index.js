import React from 'react';
import './InventoryListScreen.css'; // Make sure to import your CSS file

function InventoryList() {
  const tableData = [
    {
      Allocation_date: '2023-08-31',
      Inventory_Name: 'Sultan',
      type: 'Camera',
      Sl_No: '42130872',
      User_Name: 'Rounak Agrawal',
      Invoice: 'INV123',
      Tag_name: 'LT123',
      Working_status: 'Active',
      User_Role: 'Associate 2 Engineer'
    },
    // Add more data rows as needed
  ];

  const tableHeaders = [
    'Allocation Date',
    'Inventory Name',
    'Type',
    'Serial Number',
    'User Name',
    'Invoice',
    'Tag Name',
    'Working Status',
    'User Role'
  ];

  return (
    <div className="App">
      <h1>Inventory Table</h1>
      <table className="InventoryTable">
        <thead>
          <tr>
            {tableHeaders.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              {tableHeaders.map((header, index) => (
                <td key={index}>{row[header.replace(' ', '_')]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default InventoryList;
