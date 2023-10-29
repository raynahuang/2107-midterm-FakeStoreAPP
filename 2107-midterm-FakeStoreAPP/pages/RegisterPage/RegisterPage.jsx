import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import { createUserWithEmailAndPassword } from 'firebase/auth'; // Use the appropriate Firebase method

const RegisterPage = (props) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = async () => {
    setIsLoading(true);

    try {
      await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      
      // After successful registration, you can redirect the user or show a success message
    } catch (error) {
      // Handle registration error (e.g., display an error message)
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        background: '#f0f0f0', // Change the background color to #f0f0f0
      }}
    >
      <div style={{ textAlign: 'center', backgroundColor: 'white', padding: '16px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
        <h1>Register Page</h1>
        <form>
          <TextField
            name="email"
            type="email"
            label="Email"
            variant="outlined"
            value={formData.email}
            onChange={handleInputChange}
            fullWidth
            required
            style={{ marginBottom: '16px' }}
          />
          <TextField
            name="password"
            type="password"
            label="Password"
            variant="outlined"
            value={formData.password}
            onChange={handleInputChange}
            fullWidth
            required
            style={{ marginBottom: '16px' }}
          />
          <Button
            variant="outlined"
            color="primary"
            onClick={handleRegister}
            disabled={isLoading}
          >
            {isLoading ? 'Registering...' : 'Register'}
          </Button>
        </form>
      </div>
    </div>
  );
};

RegisterPage.propTypes = {};

export default RegisterPage;
