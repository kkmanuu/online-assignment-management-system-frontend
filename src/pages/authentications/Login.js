import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import {
  Stack,
  Button,
  Typography,
  TextField,
  Container,
  Paper,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

// Define textFieldStyles
const textFieldStyles = {
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "gray",
    },
    "&:hover fieldset": {
      borderColor: "#007bff",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#007bff",
    },
  },
  "& .MuiInputLabel-root": {
    color: "gray",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#007bff",
  },
  input: {
    color: "white",
  },
};

const Login = () => {
  const { login } = useAuth(); // Use the useAuth hook
  const [user, setUser] = useState({
    email: "",
    password: "",
    role: "student",
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("User Logged In:", user);
    login(user);

    // Redirect to dashboard after successful login
    if (user.role === "admin") {
      navigate("/admin-dashboard");
    } else {
      navigate("/student-dashboard");
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#081028",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={5}
          sx={{
            p: 4,
            borderRadius: 3,
            backgroundColor: "#101a40",
            color: "white",
          }}
        >
          <Typography align="center" variant="h4" fontWeight={600} gutterBottom>
            Welcome Back
          </Typography>
          <Typography align="center" color="gray" mb={3}>
            Login to your account
          </Typography>
          <Stack
            component="form"
            direction="column"
            spacing={2}
            onSubmit={handleSubmit}
          >
            <TextField
              id="email"
              name="email"
              type="email"
              value={user.email}
              onChange={handleInputChange}
              label="Email Address"
              variant="outlined"
              fullWidth
              required
              sx={textFieldStyles}
            />
            <TextField
              id="password"
              name="password"
              type="password"
              value={user.password}
              onChange={handleInputChange}
              label="Password"
              variant="outlined"
              fullWidth
              required
              sx={textFieldStyles}
            />
            <FormControl fullWidth sx={textFieldStyles}>
              <InputLabel id="role-label" sx={{ color: "gray" }}>
                Role
              </InputLabel>
              <Select
                labelId="role-label"
                id="role"
                name="role"
                value={user.role}
                label="Role"
                onChange={handleInputChange}
                sx={{ color: "white" }}
              >
                <MenuItem value="student">Student</MenuItem>
                <MenuItem value="admin">Admin</MenuItem>
              </Select>
            </FormControl>
            <Button
              type="submit"
              variant="contained"
              size="large"
              fullWidth
              sx={{
                mt: 2,
                backgroundColor: "#007bff",
                fontWeight: "bold",
                "&:hover": { backgroundColor: "#0056b3" },
              }}
            >
              Login
            </Button>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
};

export default Login;
