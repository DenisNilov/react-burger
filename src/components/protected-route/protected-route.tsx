import { useSelector } from '../../services/hooks';
import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { FC } from 'react';

interface IProtectedRouteProps {
    children: JSX.Element;
    needAuth?: boolean;
}

export const ProtectedRouteElement: FC<IProtectedRouteProps> = ({ children, needAuth = false }) => {

    const isAuth = useSelector((store) => store.user.isAuth);
    const haveVisitedPage = useSelector((store) => store.user.haveVisitedPage);
    const location = useLocation();

    if (needAuth) {
        return isAuth ? children : <Navigate to='/login' />
    } else {
        return (location.pathname === '/reset-password' && !haveVisitedPage) ? <Navigate to='/forgot-password' /> : children
    }
}
