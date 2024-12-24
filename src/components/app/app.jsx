import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from '../../pages/home.jsx';
import { LoginPage } from '../../pages/login.jsx';
import { RegisterPage } from '../../pages/register.jsx';
import { ForgotPasswordPage } from '../../pages/forgot-password.jsx';
import { ResetPasswordPage } from '../../pages/reset-password.jsx';
import { Profile } from '../../pages/profile.jsx';
import { ProtectedRouteElement } from '../protected-route/protected-route.jsx';
import Header from '../app-header/app-header.jsx';
import { IngredientDetailsPage } from '../../pages/ingredients-id.jsx';
import { NotFound404 } from '../../pages/not-found.jsx';

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ProtectedRouteElement ><HomePage /></ProtectedRouteElement>}>
            <Route path={`/ingredients/:id`} element={<IngredientDetailsPage />} />
          </Route>
          <Route path="/login" element={<ProtectedRouteElement><LoginPage /></ProtectedRouteElement>} />
          <Route path="/register" element={<ProtectedRouteElement><RegisterPage /></ProtectedRouteElement>} />
          <Route path="/forgot-password" element={<ProtectedRouteElement><ForgotPasswordPage /></ProtectedRouteElement>} />
          <Route path="/reset-password" element={<ProtectedRouteElement><ResetPasswordPage /></ProtectedRouteElement>} />
          <Route path="/profile" element={<ProtectedRouteElement needAuth={true}><Profile /></ProtectedRouteElement>} />
          <Route path="*" element={<NotFound404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;