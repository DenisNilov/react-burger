import Header from '../components/app-header/app-header.jsx';
import style from './page.module.css';
import {
    EmailInput,
    Button,
    PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useNavigate, Navigate, useLocation } from "react-router-dom";

export const LoginPage = () => {
    return (
        <>
            <Header />

            <form className={style.container}>
                <h1 className={`${style.text} text text_type_main-medium`}>
                    Вход
                </h1>
                <EmailInput
                    name={"email"}
                    placeholder="E-mail"
                    isIcon={false}
                    extraClass="mt-6 mb-6"
                />
                <PasswordInput
                    name={"password"}
                    extraClass="mb-6"
                />
                <Button
                    htmlType="submit"
                    type="primary"
                    size="large"
                    extraClass={"mb-20"}
                >
                    Войти
                </Button>
                <div className={`${style.wrapper} mb-4`}>
                    <p
                        className={`${style.text} text text_type_main-default text_color_inactive`}
                    >
                        Вы - новый пользователь?
                    </p>
                    <Link
                        to="/register"
                        className={`${style.link} text text_type_main-default`}
                    >
                        Зарегистрироваться
                    </Link>
                </div>
            </form>
        </>
    )
}