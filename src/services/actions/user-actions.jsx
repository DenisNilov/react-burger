import { request } from '../../utils/utils.js';

export const REGISTER_USER_REQUEST = "REGISTER_USER_REQUEST";
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_ERROR = "REGISTER_USER_ERROR";

export const LOGIN_USER_REQUEST = "LOGIN_USER_REQUEST";
export const LOGIN_USER_SUCCESS = "LOGIN_USER__SUCCESS";
export const LOGIN_USER_ERROR = "LOGIN_USER_ERROR";

export const registerUserThunk = user => dispatch => {
    dispatch({
        type: REGISTER_USER_REQUEST,
    });
    request('auth/register', {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({
            email: user.email,
            password: user.pass,
            name: user.name
        }),
    })
        .then(res => {
            if (res.success) {
                console.log(res)
                dispatch({
                    type: REGISTER_USER_SUCCESS,
                    payload: res.user,
                });
            }
        }).catch(err => dispatch({ type: REGISTER_USER_ERROR }));
};
