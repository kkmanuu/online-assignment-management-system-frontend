import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext"; // Use the useAuth hook
import {
  Stack,
  Button,
  Typography,
  TextField,
  Container,
  Paper,
  Box,
  Link,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";

const Signup = () => {
  const { login } = useAuth(); // Use the useAuth hook
  const navigate = useNavigate();
  const [user, setUser] = useState({ name: "", email: "", password: "", role: "student" });

  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulating signup (Replace with actual API call)
    console.log("User Signed Up:", user);
    
    // Redirect to login after signup
    navigate("/login");
  };

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#081028", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Container maxWidth="sm">
        <Paper elevation={5} sx={{ p: 4, borderRadius: 3, backgroundColor: "#101a40", color: "white" }}>
          <Typography align="center" variant="h4" fontWeight={600} gutterBottom>
            Create an Account
          </Typography>
          <Typography align="center" color="gray" mb={3}>
            Sign up to get started
          </Typography>
          <Stack component="form" direction="column" spacing={2} onSubmit={handleSubmit}>
            <TextField id="name" name="name" type="text" value={user.name} onChange={handleInputChange} label="Full Name" variant="outlined" fullWidth required sx={textFieldStyles} />
            <TextField id="email" name="email" type="email" value={user.email} onChange={handleInputChange} label="Email Address" variant="outlined" fullWidth required sx={textFieldStyles} />
            <TextField id="password" name="password" type="password" value={user.password} onChange={handleInputChange} label="Password" variant="outlined" fullWidth required sx={textFieldStyles} />
            <FormControl fullWidth sx={textFieldStyles}>
              <InputLabel id="role-label" sx={{ color: "gray" }}>Role</InputLabel>
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
            <Button type="submit" variant="contained" size="large" fullWidth sx={{ mt: 2, backgroundColor: "#007bff", fontWeight: "bold", "&:hover": { backgroundColor: "#0056b3" } }}>
              Sign Up
            </Button>
            <Typography color="gray" variant="body2" align="center" mt={2}>
              Already have an account? <Link href="/login" underline="hover" sx={{ color: "#4dabf5" }}>Login</Link>
            </Typography>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
};

const textFieldStyles = {
  input: { color: "white" },
  label: { color: "gray" },
  "& .MuiOutlinedInput-root": {
    "& fieldset": { borderColor: "gray" },
    "&:hover fieldset": { borderColor: "#4dabf5" },
    "&.Mui-focused fieldset": { borderColor: "#007bff" },
  },
};

export default Signup;