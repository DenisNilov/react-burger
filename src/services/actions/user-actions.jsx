import {
    request,
    setToken,
    getToken,
    setRefreshToken,
    getRefreshToken,
    resetRefreshToken,
    resetToken,
    updateAccessToken,
} from '../../utils/utils.js';

export const REGISTER_USER_REQUEST = "REGISTER_USER_REQUEST";
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_ERROR = "REGISTER_USER_ERROR";

export const LOGIN_USER_REQUEST = "LOGIN_USER_REQUEST";
export const LOGIN_USER_SUCCESS = "LOGIN_USER__SUCCESS";
export const LOGIN_USER_ERROR = "LOGIN_USER_ERROR";

export const REFRESH_TOKEN_REQUEST = "REFRESH_TOKEN_REQUEST";
export const REFRESH_TOKEN_SUCCESS = "REFRESH_TOKEN_SUCCESS";
export const REFRESH_TOKEN_ERROR = "const REFRESH_TOKEN_ERROR";

export const registerUserThunk = user => dispatch => {
    dispatch({
        type: REGISTER_USER_REQUEST,
    });
    request('auth/register', 'POST', {
        email: user.email,
        password: user.pass,
        name: user.name
    }).then(res => {
        setRefreshToken(res.refreshToken);
        setToken(res.accessToken);
        dispatch({
            type: REGISTER_USER_SUCCESS,
            payload: res.user,
        });
    }).catch(err => dispatch({ type: REGISTER_USER_ERROR }));
};

export const loginUserThunk = user => dispatch => {
    dispatch({
        type: LOGIN_USER_REQUEST,
    });
    request('auth/login', 'POST', {
        email: user.email,
        password: user.pass
    }).then(res => {
        setRefreshToken(res.refreshToken);
        setToken(res.accessToken);
        dispatch({
            type: LOGIN_USER_SUCCESS,
            payload: res.user,
        });
    }).catch((err) => {
        dispatch({
            type: LOGIN_USER_ERROR,
        });
    });
};


export const updateToken = refreshToken => dispatch => {
    dispatch({
        type: REFRESH_TOKEN_REQUEST,
    });
    updateAccessToken(refreshToken)
        .then(res => {
            setRefreshToken(res.refreshToken);
            setToken(res.accessToken);
            dispatch({
                type: REFRESH_TOKEN_SUCCESS,
                payload: res,
            });
        }).catch(err => dispatch({ type: REFRESH_TOKEN_ERROR }));
};