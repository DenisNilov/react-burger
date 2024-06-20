import React from "react";
import { Link } from "react-router-dom";
import { EmailInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./form.module.css";
import { request } from '../../utils/utils.js';


const ForgotPasswordForm = () => {

    const [value, setValue] = React.useState({ email: '' })

    const onSubmitEmail = (e) => {
        e.preventDefault();
        request('password-reset', {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify({
                "email": value.email
            })
        }).then(data => {
            if (data.success) {
                console.log(data)
            }
        }
        )
    }

    return (
        <form className={`${style.container}`} onSubmit={onSubmitEmail}>
            <h1 className={`${style.text} text text_type_main-medium`}>
                Восстановление пароля
            </h1>
            <EmailInput
                onChange={e => setValue({ ...value, email: e.target.value })}
                value={value.email}
                name={"email"}
                placeholder="Укажите e-mail"
                isIcon={false}
                extraClass="mt-6 mb-6"
            />
            <Button
                disabled={false}
                htmlType="submit"
                type="primary"
                size="large"
                extraClass={"mb-20"}
            >
                Восстановить
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
    );
};

export default ForgotPasswordForm;