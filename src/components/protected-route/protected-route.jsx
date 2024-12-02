import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import propTypes from "prop-types";

export const ProtectedRouteElement = ({ element }) => {
    let isAuth = useSelector(store => store.user.isAuth);
    return isAuth ? element : <Navigate to='/login' replace />
}

ProtectedRouteElement.propTypes = {
    element: propTypes.element.isRequired
}