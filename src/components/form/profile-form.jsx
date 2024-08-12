import React from "react";
import { Input, EmailInput, Button, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import style from './form.module.css';

const ProfileForm = () => {

    const [value, setValue] = React.useState({ name: '', email: '', pass: '' })

    return (
        <form className={`${style.profile__container}`}>
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
            <Button type="secondary" htmlType={"button"} >Отмена</Button>


        </form>
    )

}

export default ProfileForm;