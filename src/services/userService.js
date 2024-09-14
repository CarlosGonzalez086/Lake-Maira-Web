import axios from 'axios';

export const registerUser = async (user) => {
  try {
    // Realiza una solicitud POST al endpoint con los datos del usuario
    const response = await axios.post('https://localhost:44386/addUser', user, {
      headers: {
        'Content-Type': 'application/json' // Especifica que el contenido es JSON
      }
    });

    // Retorna los datos de la respuesta
    console.log(response);
    
    return response;
  } catch (error) {
    // Maneja errores de la solicitud
    console.error('Error al registrar el usuario:', error.response ? error.response.data : error.message);

    // Lanza el error para que pueda ser manejado en el hook
    throw error;
  }
};
