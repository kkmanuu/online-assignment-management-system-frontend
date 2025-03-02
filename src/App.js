import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from './pages/authentications/Signup';
import Login from './pages/authentications/Login';
import Navbar from './components/Navbar';
import ForgotPassword from './pages/authentications/ForgotPassword';

function App() {
  return (
    <Router>
    <Navbar/>
    <Routes>
    {/* <Route path="/" element={<Home />} /> */}
      <Route path="/" element={<Signup />} /> 
       <Route path="/login" element={<Login />}/>
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
     
    </Routes>
  </Router>
  );
}

export default App;
