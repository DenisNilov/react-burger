import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from '../../pages/home.jsx';
import { LoginPage } from '../../pages/login.jsx';
import { RegisterPage } from '../../pages/register.jsx';
import { ForgotPasswordPage } from '../../pages/forgot-password.jsx';
import { ResetPasswordPage } from '../../pages/reset-password.jsx';
import { Profile } from '../../pages/profile.jsx';

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>


  );
}

export default App;