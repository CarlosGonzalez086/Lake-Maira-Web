import { HashRouter as Router, Route, Routes } from "react-router-dom";

import RegisterPage from "./components/pages/RegisterPage";
import LoginPage from "./components/pages/LoginPage ";
import HomePage from "./components/pages/HomePage";
import VerifyCodePage from "./components/pages/VerifyCodePage";

function App() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflowX: "hidden",
        backgroundColor:"white"
      }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/validationcode" element={<VerifyCodePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
