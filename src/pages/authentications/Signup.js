import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const Signup = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#081028', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Container maxWidth="sm">
        <Paper 
          elevation={5} 
          sx={{ p: 4, borderRadius: 3, backgroundColor: '#101a40', color: 'white' }}
        >
            
          <Typography align="center" variant="h4" fontWeight={600} gutterBottom>
            Create an Account
          </Typography>
          <Typography align="center" color="gray" mb={3}>
            Sign up to get started
          </Typography>
          
          <Stack 
            onSubmit={handleSubmit} 
            component="form" 
            direction="column" 
            spacing={2}
          >
            <TextField
              id="name"
              name="name"
              type="text"
              value={user.name}
              onChange={handleInputChange}
              label="Full Name"
              variant="outlined"
              fullWidth
              required
              sx={{ input: { color: 'white' }, label: { color: 'gray' }, '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: 'gray' }, '&:hover fieldset': { borderColor: '#4dabf5' }, '&.Mui-focused fieldset': { borderColor: '#007bff' } } }}
            />
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
              sx={{ input: { color: 'white' }, label: { color: 'gray' }, '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: 'gray' }, '&:hover fieldset': { borderColor: '#4dabf5' }, '&.Mui-focused fieldset': { borderColor: '#007bff' } } }}
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
              sx={{ input: { color: 'white' }, label: { color: 'gray' }, '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: 'gray' }, '&:hover fieldset': { borderColor: '#4dabf5' }, '&.Mui-focused fieldset': { borderColor: '#007bff' } } }}
            />
            <Button 
              type="submit" 
              variant="contained" 
              size="large" 
              fullWidth 
              sx={{ mt: 2, backgroundColor: '#007bff', fontWeight: 'bold', '&:hover': { backgroundColor: '#0056b3' } }}
            >
              Sign Up
            </Button>
            <Typography color="gray" variant="body2" align="center" mt={2}>
              Already have an account? <Link href="/login" underline="hover" sx={{ color: '#4dabf5' }}>Login</Link>
            </Typography>
            <Typography color="gray" variant="body2" align="center" mt={1}>
  <Link href="/forgot-password" underline="hover" sx={{ color: '#4dabf5' }}>Forgot Password?</Link>
</Typography>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
};

export default Signup;
