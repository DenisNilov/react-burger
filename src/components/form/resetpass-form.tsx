import React from "react";
import style from './form.module.css';
import { Link, useNavigate } from "react-router-dom";
import { Input, Button, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { resetPassThunk } from '../../services/actions/user-actions';
import { useDispatch } from '../../services/hooks';

const ResetPasswordForm = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [values, setValues] = React.useState({ password: '' });
    const [valueNumber, setValueNumber] = React.useState("");

    const onSubmitNewPassword = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (values.password && valueNumber) {
            dispatch(resetPassThunk(values.password, valueNumber, () => navigate("/")));
        };

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
                onChange={e => setValueNumber(e.target.value)}
                value={valueNumber}
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