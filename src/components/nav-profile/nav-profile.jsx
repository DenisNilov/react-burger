import style from './nav-profile.module.css';
import { Link, NavLink } from "react-router-dom";

const NavProfile = () => {
    return (
        <nav className={style.nav}>
            <NavLink
                to={{ pathname: "/profile" }}
                className={`text text_color_primary text_type_main-medium ${style.link}`
                }
            >
                Профиль
            </NavLink>
            <NavLink
                to={{ pathname: `/profile/orders` }}
                className={`text text_color_inactive text_type_main-medium ${style.link}`
                }
            >
                История заказов
            </NavLink>
            <Link
                to={{ pathname: `/login` }}
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