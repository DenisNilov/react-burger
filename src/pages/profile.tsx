import ProfileForm from '../components/form/profile-form';
import style from './page.module.css';
import NavProfile from '../components/nav-profile/nav-profile';
import { useLocation } from "react-router-dom";
import { FC } from 'react';

export const Profile: FC = () => {

    const location = useLocation();

    return (
        <div className={`${style.profile__container} mt-20`}>
            <NavProfile />
            {location.pathname === "/profile" && <ProfileForm />}
            {location.pathname === "/profile/orders" && <div>Пока ничего нет : )</div>}
        </div>
    )
}