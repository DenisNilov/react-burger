import React from "react";
import style from './form.module.css';
import { Link } from "react-router-dom";
import { Input, Button, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { request } from '../../utils/utils.js';

const ResetPasswordForm = () => {

    const [values, setValues] = React.useState({ password: '', token: '' })

    const onSubmitNewPassword = (e) => {
        e.preventDefault();
        request('password-reset/reset', 'POST', {
            password: values.password,
            token: values.token
        }).then(data => {
            console.log(data)
        }).catch(err => console.log('не отправилось'))

    }

    return (
        <form className={style.container} onSubmit={onSubmitNewPassword}>
            <h1 className={`${style.text} text text_type_main-medium`}>
                Восстановление пароля
            </h1>
            <PasswordInput
                onChange={e => setValues({ ...values, password: e.target.value })}
                value={values.password}
                name={"password"}
                placeholder={"Введите новый пароль"}
                extraClass="mt-6 mb-6"
            />
            <Input
                onChange={e => setValues({ ...values, token: e.target.value })}
                value={values.token}
                placeholder={"Ввведите код из письма"}
                name={"number"}
                extraClass="mb-6"
            />
            <Button
                htmlType="submit"
                type="primary"
                size="large"
                extraClass={"mb-20"}
            >
                Сохранить
            </Button>
            <div className={`${style.wrapper} mb-4`}>
                <p
                    className={`${style.text} text text_type_main-default text_color_inactive`}
                >
                    Вспомнили пароль?
                </p>
                <Link
                    to={"/login"}
                    className={`${style.link} text text_type_main-default`}
                >
                    Войти
                </Link>
            </div>
        </form>
    )
}

export default ResetPasswordForm;