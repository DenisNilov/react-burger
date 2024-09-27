import React from "react";
import style from './form.module.css';
import { Link } from "react-router-dom";
import { Input, EmailInput, Button, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { registerUserThunk } from '../../services/actions/user-actions.jsx';
import { useDispatch } from "react-redux";

const RegisterForm = () => {

    const dispatch = useDispatch();
    const [value, setValue] = React.useState({ name: '', email: '', pass: '' })

    const registerSubmit = (e) => {
        e.preventDefault();
        dispatch(registerUserThunk(value))
    }


    return (
        <form className={`${style.container}`} onSubmit={registerSubmit}>
            <h1 className={`${style.text} text text_type_main-medium`}>
                Регистрация
            </h1>
            <Input
                onChange={e => setValue({ ...value, name: e.target.value })}
                value={value.name}
                placeholder={"Name"}
                name={"name"}
                extraClass="mt-6 mb-6"
            />
            <EmailInput
                onChange={e => setValue({ ...value, email: e.target.value })}
                value={value.email}
                name={"email"}
                placeholder="E-mail"
                isIcon={false}
                extraClass="mb-6"
            />
            <PasswordInput
                onChange={e => setValue({ ...value, pass: e.target.value })}
                value={value.pass}
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