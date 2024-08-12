import style from './nav-profile.module.css';
import { Link, NavLink, useLocation } from "react-router-dom";

const NavProfile = () => {

    const location = useLocation();

    return (
        <nav className={style.nav}>
            <NavLink
                to={{ pathname: "/profile" }}
                className={
                    location.pathname === "/profile"
                        ? `text text_color_primary text_type_main-medium ${style.link}`
                        : `text text_color_inactive text_type_main-medium ${style.link}`
                }
            >
                Профиль
            </NavLink>
            <NavLink
                to={{ pathname: `/profile/orders` }}
                className={
                    location.pathname === "/profile/orders"
                        ? `text text_color_primary text_type_main-medium ${style.link}`
                        : `text text_color_inactive text_type_main-medium ${style.link}`
                }
            >
                История заказов
            </NavLink>
            <Link
                className={`text text_color_inactive text_type_main-medium ${style.link}`}
            >
                Выход
            </Link>
            <p
                className={`text text_color_inactive text_type_main-small ${style.text} mt-20`}
            >
                В этом разделе Вы можете изменить свои персональные данные
            </p>
        </nav>
    );
};

export default NavProfile;