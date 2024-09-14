// src/components/forms/LoginForm.js
import React from 'react';
import { useLogin } from '../../hooks/useLogin';


const LoginForm = () => {
  const { credentials, setCredentials, handleLogin, message } = useLogin();

  return (
    <form onSubmit={handleLogin}>
      <div>
        <label>Correo Electrónico:</label>
        <input
          type="email"
          name="email"
          value={credentials.email}
          onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
          required
        />
      </div>
      <div>
        <label>Contraseña:</label>
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
          required
        />
      </div>
      <button type="submit">Iniciar Sesión</button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default LoginForm;
