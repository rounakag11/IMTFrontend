import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupScreen from './screen/signup/index';
import LoginScreen from './screen/login';
import ForgotPassword from './screen/forgetpassword';
import SetNewPasswordScreen from './screen/resetPassword';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/Signup" element={<SignupScreen />} />
          <Route path="/Login" element={<LoginScreen />} />
          <Route path="/ForgetPassword" element={<ForgotPassword />} />
          <Route path="/SetNewPassword" element={<SetNewPasswordScreen />} />

        </Routes>
      </BrowserRouter>
      
    </div>
  );
}
export  default App