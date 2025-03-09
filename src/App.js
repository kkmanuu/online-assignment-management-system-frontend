import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ForgotPassword from "./pages/authentications/ForgotPassword";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import PrivateRoute from "./pages/PrivateRoute";
import StudentDashboard from "./pages/StudentsDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import Login from "./pages/authentications/Login";
import Signup from "./pages/authentications/Signup";

function App() {
  return (
    <AuthProvider>
      <Router>
        <>
          <Navbar />
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />

            {/* Protected Routes */}
            <Route
              path="/student-dashboard"
              element={
                <PrivateRoute role="student">
                  <StudentDashboard />
                </PrivateRoute>
              }
            />
            <Route
              path="/admin-dashboard"
              element={
                <PrivateRoute role="admin">
                  <AdminDashboard />
                </PrivateRoute>
              }
            />
          </Routes>
        </>
      </Router>
    </AuthProvider>
  );
}

export default App;
