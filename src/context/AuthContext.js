import { createContext, useContext, useState } from "react";

// Create AuthContext
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null); // Store user role

  // Function to handle login
  const login = (userData) => {
    setUser(userData);
    setRole(userData.role); // Assign role from userData
  };

  // Function to handle logout
  const logout = () => {
    setUser(null);
    setRole(null);
  };

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider
      value={{ user, role, isAuthenticated, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook for easier access
export const useAuth = () => useContext(AuthContext);

export default AuthContext;
