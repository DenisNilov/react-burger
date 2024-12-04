import ProfileForm from '../components/form/profile-form.jsx';
import style from './page.module.css';
import NavProfile from '../components/nav-profile/nav-profile.jsx';

export const Profile = () => {
    return (
        <div className={`${style.profile__container} mt-20`}>
            <NavProfile />
            <ProfileForm />
        </div>
    )
}