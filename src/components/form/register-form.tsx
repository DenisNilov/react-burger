import React, { FC } from "react";
import style from './form.module.css';
import { Link, useNavigate } from "react-router-dom";
import { Input, EmailInput, Button, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { registerUserThunk } from '../../services/actions/user-actions';
import { useSelector, useDispatch } from '../../services/hooks';

const RegisterForm: FC = () => {

    const dispatch = useDispatch();
    const [values, setValues] = React.useState({ name: '', email: '', password: '' })
    const user = useSelector(store => store.user.userData);
    const navigate = useNavigate();

    const registerSubmit = React.useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (user) return;
        dispatch(registerUserThunk(values));
        navigate('/');
    }, [dispatch, user, values, navigate]);


    return (
        <form className={`${style.container}`} onSubmit={registerSubmit}>
            <h1 className={`${style.text} text text_type_main-medium`}>
                Регистрация
            </h1>
            <Input
                onChange={e => setValues({ ...values, name: e.target.value })}
                value={values.name}
                placeholder={"Name"}
                name={"name"}
                extraClass="mt-6 mb-6"
            />
            <EmailInput
                onChange={e => setValues({ ...values, email: e.target.value })}
                value={values.email}
                name={"email"}
                placeholder="E-mail"
                isIcon={false}
                extraClass="mb-6"
            />
            <PasswordInput
                onChange={e => setValues({ ...values, password: e.target.value })}
                value={values.password}
                name={'password'}
                extraClass="mb-6"
            />
            <Button
                htmlType="submit"
                type="primary"
                size="large"
                extraClass={"mb-20"}
            >
                Зарегистрироваться
            </Button>
            <div className={`${style.wrapper} mb-4`}>
                <p
                    className={`${style.text} text text_type_main-default text_color_inactive`}
                >
                    Уже зарегистрированы?
                </p>
                <Link to="/login" className={`${style.link} text text_type_main-default`}>
                    Войти
                </Link>
            </div>
        </form>
    )
}

export default RegisterForm;