import React from "react";
import { Input, EmailInput, Button, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import style from './form.module.css';
import { useSelector, useDispatch } from "react-redux";
import { updateUserData } from '../../services/actions/user-actions';
import { getToken } from '../../utils/utils';


const ProfileForm = () => {

    const [isEdit, setEdit] = React.useState(null);
    const user = useSelector((state) => state.user.userData);
    const dispatch = useDispatch();
    const token = getToken();

    const [values, setValues] = React.useState({
        email: `${user ? user.email : ""}`,
        password: "",
        name: `${user ? user.name : ""}`,
    });

    const isEditValue = isEdit === null ? false : isEdit?.name !== values.name || isEdit?.email !== values.email || values.password !== '';

    React.useEffect(() => {
        setEdit(user)
    }, [user, isEditValue])

    const onChange = e => {
        const { name, value } = e.target;
        setValues(prevValues => {
            return { ...prevValues, [name]: value };
        });

    }

    const updateSubmit = React.useCallback(e => {
        e.preventDefault();
        dispatch(updateUserData(values, token));
    },
        [dispatch, values, token]
    );

    const onReset = () => setValues({
        name: user.name,
        password: "",
        email: user.email
    });


    return (
        <form className={`${style.profile__container}`} onSubmit={updateSubmit}>
            <Input
                onChange={onChange}
                value={values.name}
                placeholder={"Имя"}
                type={"text"}
                name={"name"}
                icon="EditIcon"
                extraClass="mb-6"
            />
            <EmailInput
                onChange={onChange}
                value={values.email}
                name={"email"}
                placeholder="Логин"
                isIcon={false}
                extraClass="mb-6"
            />
            <PasswordInput
                onChange={onChange}
                value={values.password}
                name={"password"}
                placeholder="Пароль"
                extraClass="mb-6"
                icon="EditIcon"
            />

            {
                isEditValue && (
                    <>
                        <Button extraClass="mr-2" type="primary" htmlType={"submit"}>Сохранить</Button>
                        <Button type="secondary" htmlType={"button"} onClick={onReset}>Отмена</Button>
                    </>
                )}
        </form>
    )

}

export default ProfileForm;