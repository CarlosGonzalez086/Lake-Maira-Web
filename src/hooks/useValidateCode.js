import { useState } from 'react';
import Swal from 'sweetalert2';
import { validateCode } from '../services/userService';


export const useValidateCode = () => {
    const [code, setCode] = useState(''); // Estado para el código ingresado
    const [responseMessage, setResponseMessage] = useState(''); // Estado para el mensaje de respuesta

    const handleValidateCode = async (e) => {
        e.preventDefault(); // Evita el comportamiento predeterminado del formulario
        
        try {
            const response = await validateCode(code); // Llama a la función para validar el código

            // Maneja las respuestas según el código de estado HTTP devuelto
            switch (response.status) {
                case 200:
                    // Muestra una notificación de éxito
                    Swal.fire({
                        icon: 'success',
                        title: 'Código válido',
                        text: response.data.message || 'El código es válido.'
                    });
                    break;

                case 400:
                    // Muestra una notificación de error específico
                    Swal.fire({
                        icon: 'error',
                        title: 'Código Inválido',
                        text: response.data.message || 'El código proporcionado no es válido.'
                    });
                    break;

                default:
                    // Muestra una notificación de error genérico para otros códigos de estado
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: response.data.message || 'Ocurrió un error al validar el código.'
                    });
                    break;
            }

            // Actualiza el estado del mensaje de respuesta
            setResponseMessage(response.data.message || 'Operación completada.');

        } catch (error) {
            // Muestra una notificación de error en caso de excepción
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Hubo un error al conectar con el servidor.'
            });
            setResponseMessage('Error al validar el código.');
            console.error('Error:', error);
        }
    };

    return { code, setCode, handleValidateCode, responseMessage };
};
