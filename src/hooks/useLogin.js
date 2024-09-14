// src/hooks/useLogin.js
import { useState } from 'react';
import { loginUser } from '../services/authService';

export const useLogin = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser(credentials);
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Error al iniciar sesión');
      console.error('Error:', error);
    }
  };

  return { credentials, setCredentials, handleLogin, message };
};
