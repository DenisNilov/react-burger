import React from "react";
import { Input, EmailInput, Button, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import style from './form.module.css';
import { useSelector, useDispatch } from "react-redux";
import { updateUserData } from '../../services/actions/user-actions.jsx';
import { getToken } from '../../utils/utils.js';


const ProfileForm = () => {

    const user = useSelector((state) => state.user.userData);
    const dispatch = useDispatch();
    const token = getToken();

    const [value, setValue] = React.useState({
        email: `${user ? user.email : ""}`,
        pass: "",
        name: `${user ? user.name : ""}`,
    });

    const updateSubmit = React.useCallback(e => {
        e.preventDefault();
        dispatch(updateUserData(value, token));
    },
        [dispatch, value, token]
    );

    const onReset = () => setValue({
        name: user.name,
        pass: "",
        email: user.email
    });


    return (
        <form className={`${style.profile__container}`} onSubmit={updateSubmit}>
            <Input
                onChange={e => setValue({ ...value, name: e.target.value })}
                value={value.name}
                placeholder={"Имя"}
                type={"text"}
                name={"name"}
                icon="EditIcon"
                extraClass="mb-6"
            />
            <EmailInput
                onChange={e => setValue({ ...value, email: e.target.value })}
                value={value.email}
                name={"email"}
                placeholder="Логин"
                isIcon={false}
                extraClass="mb-6"
            />
            <PasswordInput
                onChange={e => setValue({ ...value, pass: e.target.value })}
                value={value.pass}
                name={"password"}
                placeholder="Пароль"
                extraClass="mb-6"
                icon="EditIcon"
            />
            <Button extraClass="mr-2" type="primary" htmlType={"submit"}>Сохранить</Button>
            <Button type="secondary" htmlType={"button"} onClick={onReset}>Отмена</Button>


        </form>
    )

}

export default ProfileForm;