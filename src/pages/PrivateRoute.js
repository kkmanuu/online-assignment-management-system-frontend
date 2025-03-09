import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Use the custom hook

const PrivateRoute = ({ children, role }) => {
  const { isAuthenticated, role: userRole } = useAuth();

  // If not authenticated, redirect to login
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  // If role is specified and doesn't match, redirect to unauthorized
  if (role && userRole !== role) {
    return <Navigate to="/unauthorized" />;
  }

  // Otherwise, render the children
  return children;
};

export default PrivateRoute;