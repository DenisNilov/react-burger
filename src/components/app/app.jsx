import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from '../../pages/home.jsx';
import { LoginPage } from '../../pages/login.jsx';
import { RegisterPage } from '../../pages/register.jsx';
import { ForgotPasswordPage } from '../../pages/forgot-password.jsx';
import { ResetPasswordPage } from '../../pages/reset-password.jsx';
import { Profile } from '../../pages/profile.jsx';
import { ProtectedRouteElement } from '../protected-route/protected-route.jsx';
import Header from '../app-header/app-header.jsx';

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ProtectedRouteElement needAuth={false}><HomePage /></ProtectedRouteElement>} />
          <Route path="/login" element={<ProtectedRouteElement needAuth={false}><LoginPage /></ProtectedRouteElement>} />
          <Route path="/register" element={<ProtectedRouteElement needAuth={false}><RegisterPage /></ProtectedRouteElement>} />
          <Route path="/forgot-password" element={<ProtectedRouteElement needAuth={false}><ForgotPasswordPage /></ProtectedRouteElement>} />
          <Route path="/reset-password" element={<ProtectedRouteElement needAuth={false}><ResetPasswordPage /></ProtectedRouteElement>} />
          <Route path="/profile" element={<ProtectedRouteElement needAuth={true}><Profile /></ProtectedRouteElement>} />
        </Routes>
      </BrowserRouter>
    </>


  );
}

export default App;