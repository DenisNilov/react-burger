import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import propTypes from "prop-types";
import { useLocation } from "react-router-dom";

export const ProtectedRouteElement = ({ children, needAuth }) => {

    const isAuth = useSelector((store) => store.user.isAuth);
    const location = useLocation();

    if (needAuth) {
        console.log('нужна авторизация и она :' + isAuth)
        return isAuth ? children : <Navigate to='/login' /* state={{ from: '/reset-password' }} */ />
    }
    else {
        console.log('не нужна авторизация и она :' + isAuth)
        return isAuth ? <Navigate to={location.state?.from ?? '/'} /> : children
    }
}


ProtectedRouteElement.propTypes = {
    children: propTypes.element.isRequired,
    needAuth: propTypes.bool.isRequired,
}