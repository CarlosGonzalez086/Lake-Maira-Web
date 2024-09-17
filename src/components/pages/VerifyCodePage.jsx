// src/components/pages/RegisterPage.js
import React from "react";

import { Card } from "@mui/material";
import VerifyCodeForm from "../forms/VerifyCodeForm";

const VerifyCodePage = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Card
        className="p-4 shadow p-3 mb-5 bg-body rounded"
        style={{ width: "400px" }}
      >
        <VerifyCodeForm />
      </Card>
    </div>
  );
};

export default VerifyCodePage;
