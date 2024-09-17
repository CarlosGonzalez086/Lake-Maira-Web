import React from 'react';
import { Card, Button } from 'react-bootstrap'; // Asegúrate de tener react-bootstrap instalado
import { Link } from 'react-router-dom'; // Asegúrate de tener react-router-dom instalado


const HomePage = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Card className="p-4 shadow p-3 mb-5 bg-body rounded">
        <div className="mb-3 text-center">
          <h1>Laguna la Maria</h1>
        </div>
        <div className="d-flex flex-column align-items-center">
          <Link to="/login" className="mb-2">
            <Button variant="outline-primary" className="w-100">Iniciar Sesión</Button>
          </Link>
          <Link to="/register">
            <Button variant="outline-primary" className="w-100">Crear Cuenta</Button>
          </Link>
        </div>
      </Card>
    </div>
  );
}

export default HomePage;
