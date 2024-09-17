import axios from 'axios';

export const registerUser = async (user) => {
  try {
    const response = await axios.post('https://localhost:44386/addUser', user, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response;
  } catch (error) {
    console.error('Error al registrar el usuario:', error.response ? error.response.data : error.message);
    // Lanza el error para que pueda ser manejado en el hook
    throw error;
  }
};

export const validateCode = async (code) => {
  try {
    const response = await axios.get(`https://localhost:44386/validateCode`, {
      params: {
        codigo: code 
      }
    });
    return response; 
  } catch (error) {
    console.error('Error al validar el código', error);
    throw error; // Maneja el error en caso de fallo
  }
};
