// src/components/forms/LoginForm.js
import React from 'react';
import { useLogin } from '../../hooks/useLogin';
import { TextField, Button, Typography, Box } from '@mui/material';

const LoginForm = () => {
  const { credentials, setCredentials, handleLogin, message } = useLogin();

  return (
    <Box
      component="form"
      onSubmit={handleLogin}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        maxWidth: 400,
        margin: 'auto',
        padding: 2
      }}
    >
      <Typography variant="h6" component="div" textAlign="center" mb={2}>
        Iniciar Sesión
      </Typography>
      <TextField
        label="Correo Electrónico"
        type="email"
        name="email"
        value={credentials.email}
        onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
        required
        fullWidth
        variant="outlined"
      />
      <TextField
        label="Contraseña"
        type="password"
        name="password"
        value={credentials.password}
        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
        required
        fullWidth
        variant="outlined"
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
      >
        Iniciar Sesión
      </Button>
      {message && (
        <Typography variant="body2" color="error" textAlign="center" mt={2}>
          {message}
        </Typography>
      )}
    </Box>
  );
};

export default LoginForm;
