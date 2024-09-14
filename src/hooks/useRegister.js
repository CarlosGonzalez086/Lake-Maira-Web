import { useState } from 'react';
import Swal from 'sweetalert2';
import { registerUser } from '../services/userService';

export const useRegister = () => {
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: ''
    });
    const [responseMessage, setResponseMessage] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await registerUser(user);
            
            // Manejar respuestas basadas en el código de estado
            switch (response.data.status) {
                case 200:
                    // Muestra una notificación de éxito
                    Swal.fire({
                        icon: 'success',
                        title: 'Registro Exitoso',
                        text: response.data.message || 'El usuario se ha registrado correctamente.'
                    });
                    break;

                case 900:
                    // Muestra una notificación de error específico
                    Swal.fire({
                        icon: 'error',
                        title: 'Error de Validación',
                        text: response.data.message || 'Hubo un error con los datos proporcionados.'
                    });
                    break;

                case 902:
                    // Muestra una notificación de usuario ya registrado
                    Swal.fire({
                        icon: 'error',
                        title: 'Usuario ya Registrado',
                        text: response.data.message || 'Ya existe un usuario con el mismo correo electrónico o número de teléfono.'
                    });
                    break;

                default:
                    // Muestra una notificación de error genérico para otros códigos de estado
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: response.data.message || 'Hubo un error al registrar el usuario.'
                    });
                    break;
            }

            // Actualiza el estado del mensaje de respuesta
            setResponseMessage(response.data.message);

        } catch (error) {
            // Muestra una notificación de error en caso de excepción
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Hubo un error al conectar con el servidor.'
            });
            setResponseMessage('Error al registrar el usuario');
            console.error('Error:', error);
        }
    };

    return { user, setUser, handleRegister, responseMessage };
};
