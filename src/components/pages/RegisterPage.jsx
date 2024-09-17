// src/components/pages/RegisterPage.js
import React from 'react';
import RegisterForm from '../forms/RegisterForm';
import { Card } from '@mui/material';


const RegisterPage = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Card className="p-4 shadow p-3 mb-5 bg-body rounded" style={{width:"400px"}}>
      <RegisterForm />
      </Card>
    </div>
  );
};

export default RegisterPage;
