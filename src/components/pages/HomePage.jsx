// src/components/pages/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../shared/Header';


const HomePage = () => {
  return (
    <div>
      <Header />
      <h1>Bienvenido a nuestra Aplicación</h1>
      <p>Por favor, inicie sesión o cree una cuenta para continuar.</p>
      <div>
        <Link to="/login">Iniciar Sesión</Link>
      </div>
      <div>
        <Link to="/register">Crear Cuenta</Link>
      </div>
    </div>
  );
};

export default HomePage;
