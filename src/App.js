import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupScreen from './screen/signup/index';
import LoginScreen from './screen/login';
import ForgotPassword from './screen/forgetpassword';
import SetNewPasswordScreen from './screen/resetPassword';
import Dashboard from './screen/Dashboard';
import EditProfile from './screen/editProfile';
import ModifiedInventoryScreen from './screen/modifiedInventory';
import AddNewInventoryInventoryScreen from './screen/addNewInventory';
import InventoryList from './screen/InventoryList/inventorylist';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/Signup" element={<SignupScreen />} />
          <Route path="/Login" element={<LoginScreen />} />
          <Route path="/ForgetPassword" element={<ForgotPassword />} />
          <Route path="/SetNewPassword" element={<SetNewPasswordScreen />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/editProfile" element={<EditProfile />} />
          <Route path="/modifiedInventory" element={<ModifiedInventoryScreen />} />
          <Route path="/addNewInventory" element={<AddNewInventoryInventoryScreen />} />
          <Route path="/inventoryList" element={<InventoryList />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}
export  default App