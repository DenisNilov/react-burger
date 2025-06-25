import { Routes, Route, useLocation } from 'react-router-dom';
import { HomePage } from '../../pages/home';
import { LoginPage } from '../../pages/login';
import { RegisterPage } from '../../pages/register';
import { ForgotPasswordPage } from '../../pages/forgot-password';
import { ResetPasswordPage } from '../../pages/reset-password';
import { Profile } from '../../pages/profile';
import { ProtectedRouteElement } from '../protected-route/protected-route';
import Header from '../app-header/app-header';
import IngredientDetailsModalPage from '../../pages/ingredients-id';
import { NotFound404 } from '../../pages/not-found';
import { useDispatch } from '../../services/hooks';
import { getUserData } from '../../services/actions/user-actions';
import React, { FC } from "react";
import TechnologicalMode from "../technological-mode/technological-mode";
import IngredientDetailsPage from '../../pages/ingredient-detail-dage';
import { FeedPage } from '../../pages/feed';

const App: FC = () => {

  const dispatch = useDispatch();
  const location = useLocation();
  const background = location.state?.background;

  React.useEffect(() => {
    dispatch(getUserData())
  }, [dispatch]);

  return (
    <>
      <Header />
      <Routes location={background || location}>
        <Route path="/" element={<ProtectedRouteElement ><HomePage /></ProtectedRouteElement>} />
        <Route path={`/ingredients/:id`} element={<IngredientDetailsPage />} />
        <Route path="/login" element={<ProtectedRouteElement><LoginPage /></ProtectedRouteElement>} />
        <Route path="/register" element={<ProtectedRouteElement><RegisterPage /></ProtectedRouteElement>} />
        <Route path="/forgot-password" element={<ProtectedRouteElement><ForgotPasswordPage /></ProtectedRouteElement>} />
        <Route path="/reset-password" element={<ProtectedRouteElement><ResetPasswordPage /></ProtectedRouteElement>} />
        <Route path="/profile" element={<ProtectedRouteElement needAuth={true}><Profile /></ProtectedRouteElement>} />
        <Route path="/profile/orders" element={<ProtectedRouteElement needAuth={true}><Profile /></ProtectedRouteElement>} />
        <Route path="/technological-mode" element={<ProtectedRouteElement needAuth={true}><TechnologicalMode /></ProtectedRouteElement>} />
        <Route path="/feed" element={<ProtectedRouteElement><FeedPage /></ProtectedRouteElement>} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>

      {background?.pathname === '/' && (
        <Routes>
          <Route path="/ingredients/:id" element={<IngredientDetailsModalPage />} />
        </Routes>
      )}
    </>
  );
}

export default App;