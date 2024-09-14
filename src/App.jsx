import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import RegisterPage from './components/pages/RegisterPage';
import LoginPage from './components/pages/LoginPage ';
import HomePage from './components/pages/HomePage';
import Header from './components/shared/Header';


function App() {
  return (
    <Router>
    <Header />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  </Router>
  );
}

export default App;
