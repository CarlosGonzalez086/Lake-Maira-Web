import React from 'react';
import { useRegister } from '../../hooks/useRegister';
import { Button, TextField, Container, Typography, Alert } from '@mui/material';

const RegisterForm = () => {
  const { user, setUser, handleRegister, responseMessage } = useRegister();

  return (
    <Container maxWidth="sm" className="mt-4">
      <Typography variant="h4" component="h1" gutterBottom>
        Crear Cuenta
      </Typography>
      <form onSubmit={handleRegister}>
        <div className="mb-3">
          <TextField
            fullWidth
            label="Nombre"
            variant="outlined"
            margin="normal"
            value={user.firstName}
            onChange={(e) => setUser({ ...user, firstName: e.target.value })}
            required
          />
        </div>
        <div className="mb-3">
          <TextField
            fullWidth
            label="Apellido"
            variant="outlined"
            margin="normal"
            value={user.lastName}
            onChange={(e) => setUser({ ...user, lastName: e.target.value })}
            required
          />
        </div>
        <div className="mb-3">
          <TextField
            fullWidth
            label="Correo Electrónico"
            type="email"
            variant="outlined"
            margin="normal"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            required
          />
        </div>
        <div className="mb-3">
          <TextField
            fullWidth
            label="Teléfono"
            variant="outlined"
            margin="normal"
            value={user.phoneNumber}
            onChange={(e) => setUser({ ...user, phoneNumber: e.target.value })}
          />
        </div>
        <Button variant="contained" color="primary" type="submit">
          Crear Cuenta
        </Button>
        {responseMessage && (
          <div className="mt-3">
            <Alert severity={responseMessage.includes('Error') ? 'error' : 'success'}>
              {responseMessage}
            </Alert>
          </div>
        )}
      </form>
    </Container>
  );
};

export default RegisterForm;
