import React from "react";
import { EmailInput, Button, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import style from './form.module.css';
import { loginUserThunk } from '../../services/actions/user-actions.jsx';
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(store => store.user.userData);
    const [values, setValue] = React.useState({ email: '', password: '' });

    const loginSubmit = (e) => {
        e.preventDefault();
        dispatch(loginUserThunk(values));
        if (user) navigate('/');
    }

    return (
        <form className={style.container} onSubmit={loginSubmit}>
            <h1 className={`${style.text} text text_type_main-medium`}>
                Вход
            </h1>

            <EmailInput
                onChange={e => setValue({ ...values, email: e.target.value })}
                value={values.email}
                name={"email"}
                placeholder="E-mail"
                isIcon={false}
                extraClass="mt-6 mb-6"
            />
            <PasswordInput
                onChange={e => setValue({ ...values, password: e.target.value })}
                value={values.password}
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
            <div className={`${style.wrapper}`}>
                <p
                    className={`${style.text} text text_type_main-default text_color_inactive`}
                >
                    Забыли пароль?
                </p>
                <Link
                    to={"/forgot-password"}
                    className={`${style.link} text text_type_main-default `}
                >
                    Востановить пароль
                </Link>
            </div>
        </form>
    )

}

export default LoginForm;