import Header from '../components/app-header/app-header.jsx';
import ProfileForm from '../components/form/profile-form.jsx';
import style from './page.module.css';
import NavProfile from '../components/nav-profile/nav-profile.jsx';

export const Profile = () => {
    return (
        <>
            <Header />
            <div className={`${style.profile__container} mt-20`}>
                <NavProfile />
                <ProfileForm />
            </div>

        </>
    )
}