import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, Container, Paper, Typography, TextField, Button, Link } from "@mui/material";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Reset link sent to:", email);
  };

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#081028", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Container maxWidth="sm">
        <Paper elevation={5} sx={{ p: 4, borderRadius: 3, backgroundColor: "#101a40", color: "white" }}>
          <Typography align="center" variant="h4" fontWeight={600} gutterBottom>
            Forgot Password
          </Typography>
          <Typography align="center" color="gray" mb={3}>
            Enter your email address and we'll send you a link to reset your password.
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              type="email"
              label="Email Address"
              variant="outlined"
              fullWidth
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{
                input: { color: "white" },
                label: { color: "gray" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "gray" },
                  "&:hover fieldset": { borderColor: "#4dabf5" },
                  "&.Mui-focused fieldset": { borderColor: "#007bff" },
                },
              }}
            />
            <Button type="submit" variant="contained" size="large" fullWidth sx={{ mt: 2, backgroundColor: "#007bff", fontWeight: "bold", "&:hover": { backgroundColor: "#0056b3" } }}>
              Send Reset Link
            </Button>
          </form>
          <Typography color="gray" variant="body2" align="center" mt={2}>
            <Link component={RouterLink} to="/login" underline="hover" sx={{ color: "#4dabf5" }}>
              Back to Login
            </Link>
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default ForgotPassword;
