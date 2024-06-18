import React from "react";
import { EmailInput, Button, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
import style from './form.module.css';

const LoginForm = () => {

    const [value, setValue] = React.useState({ name: '', pass: '' })

    return (
        <form className={style.container}>
            <h1 className={`${style.text} text text_type_main-medium`}>
                Вход
            </h1>
            <EmailInput
                onChange={e => setValue({ ...value, name: e.target.value })}
                value={value.name}
                name={"email"}
                placeholder="E-mail"
                isIcon={false}
                extraClass="mt-6 mb-6"
            />
            <PasswordInput
                onChange={e => setValue({ ...value, pass: e.target.value })}
                value={value.pass}
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