// src/components/pages/LoginPage.js
import React from "react";
import LoginForm from "../forms/LoginForm";
import { Button, Card } from "@mui/material";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Card className="p-4 shadow p-3 mb-5 bg-body rounded">
        <div className="d-flex flex-column align-items-center">
          <LoginForm />
        </div>
      </Card>
    </div>
  );
};

export default LoginPage;
