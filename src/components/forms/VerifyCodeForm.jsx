import React from 'react';
import { TextField, Button, Typography, Box } from '@mui/material'; // Importa los componentes de Material UI
import { useValidateCode } from '../../hooks/useValidateCode';


const VerifyCodeForm = () => {
    const { code, setCode, handleValidateCode, responseMessage } = useValidateCode();

    return (
        <Box
            component="form"
            onSubmit={handleValidateCode}
            sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, mt: 5 }}
        >
            {/* Campo de texto con Material UI */}
            <TextField
                label="Ingresa el código"
                variant="outlined"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                fullWidth
            />

            {/* Botón de validación */}
            <Button variant="contained" color="primary" type="submit" fullWidth>
                Validar Código
            </Button>

            {/* Mostrar el mensaje de respuesta si existe */}
            {responseMessage && (
                <Typography variant="body1" color="textSecondary" sx={{ mt: 2 }}>
                    {responseMessage}
                </Typography>
            )}
        </Box>
    );
};

export default VerifyCodeForm;
