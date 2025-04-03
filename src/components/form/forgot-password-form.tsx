import { FC, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { EmailInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./form.module.css";
import { forgotPassThunk } from '../../services/actions/user-actions';
import { useDispatch } from '../../services/hooks';


const ForgotPasswordForm: FC = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [values, setValue] = useState({ email: '' })

    const onSubmitEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (values.email) {
            dispatch(forgotPassThunk(values.email, () => navigate('/reset-password')));
        };
    }

    return (
        <form className={`${style.container}`} onSubmit={onSubmitEmail}>
            <h1 className={`${style.text} text text_type_main-medium`}>
                Восстановление пароля
            </h1>
            <EmailInput
                onChange={e => setValue({ ...values, email: e.target.value })}
                value={values.email}
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