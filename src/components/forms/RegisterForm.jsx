// src/components/forms/RegisterForm.js
import React from 'react';
import { useRegister } from '../../hooks/useRegister';


const RegisterForm = () => {
  const { user, setUser, handleRegister, responseMessage } = useRegister();

  return (
    <form onSubmit={handleRegister}>
      <div>
        <label>Nombre:</label>
        <input
          type="text"
          name="firstName"
          value={user.firstName}
          onChange={(e) => setUser({ ...user, firstName: e.target.value })}
          required
        />
      </div>
      <div>
        <label>Apellido:</label>
        <input
          type="text"
          name="lastName"
          value={user.lastName}
          onChange={(e) => setUser({ ...user, lastName: e.target.value })}
          required
        />
      </div>
      <div>
        <label>Correo Electrónico:</label>
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          required
        />
      </div>
      <div>
        <label>Teléfono:</label>
        <input
          type="text"
          name="phoneNumber"
          value={user.phoneNumber}
          onChange={(e) => setUser({ ...user, phoneNumber: e.target.value })}
        />
      </div>
      <button type="submit">Crear Cuenta</button>
      {responseMessage && <p>{responseMessage}</p>}
    </form>
  );
};

export default RegisterForm;
