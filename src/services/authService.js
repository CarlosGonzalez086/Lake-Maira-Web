// src/services/authService.js
import axios from 'axios';

export const loginUser = async (credentials) => {
  return axios.post('http://localhost:44386/login', credentials);
};
