import {
    request,
    setToken,
    getToken,
    setRefreshToken,
    getRefreshToken,
    resetRefreshToken,
    resetToken,
    updateAccessToken,
    getUserInfo,
    updateUserInfo,
    postNewPassword,
} from '../../utils/utils.js';

export const REGISTER_USER_REQUEST = "REGISTER_USER_REQUEST";
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_ERROR = "REGISTER_USER_ERROR";

export const LOGIN_USER_REQUEST = "LOGIN_USER_REQUEST";
export const LOGIN_USER_SUCCESS = "LOGIN_USER__SUCCESS";
export const LOGIN_USER_ERROR = "LOGIN_USER_ERROR";

export const REFRESH_TOKEN_REQUEST = "REFRESH_TOKEN_REQUEST";
export const REFRESH_TOKEN_SUCCESS = "REFRESH_TOKEN_SUCCESS";
export const REFRESH_TOKEN_ERROR = "REFRESH_TOKEN_ERROR";

export const LOGOUT_USER = "LOGOUT_USER";

export const UPDATE_USER_REQUEST = "UPDATE_USER_REQUEST";
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const UPDATE_USER_ERROR = "UPDATE_USER_ERROR";

export const GET_USER_REQUEST = "GET_USER_REQUEST";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_ERROR = "GET_USER_ERROR";

export const RESET_PASSWORD_REQUEST = "RESET_PASSWORD_REQUEST";
export const RESET_PASSWORD_SUCCESS = "RESET_PASSWORD_SUCCESS";
export const RESET_PASSWORD_ERROR = "RESET_PASSWORD_ERROR";

export const registerUserThunk = user => dispatch => {
    dispatch({
        type: REGISTER_USER_REQUEST,
    });
    request('auth/register', 'POST', {
        email: user.email,
        password: user.password,
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
        password: user.password
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

export const logoutThunk = refreshToken => dispatch => {
    request('auth/logout', 'POST', {
        token: refreshToken
    }).then(res => {
        localStorage.clear();
        resetRefreshToken(res.refreshToken);
        resetToken(res.accessToken);
        dispatch({ type: LOGOUT_USER });
    }).catch((err) => console.log(err));
};

export const updateUserData = (data, refreshToken) => dispatch => {
    dispatch({
        type: UPDATE_USER_REQUEST,
    });
    updateUserInfo(data, refreshToken)
        .then(res => {
            console.log(res)
            dispatch({
                type: UPDATE_USER_SUCCESS,
                payload: res.user,
            });
        }).catch(err => dispatch({ type: UPDATE_USER_ERROR }));
};

export const getUserData = () => dispatch => {
    dispatch({ type: GET_USER_REQUEST });
    getUserInfo(getToken())
        .then(res => {
            dispatch({
                type: GET_USER_SUCCESS,
                payload: res.user
            })
        })
        .catch(err => dispatch({ type: GET_USER_ERROR }))
};

export const resetPassThunk = (password, code, callback) => dispatch => {
    dispatch({
        type: RESET_PASSWORD_REQUEST,
    });
    postNewPassword(password, code)
        .then((res) => {
            console.log(res);
            dispatch({
                type: RESET_PASSWORD_SUCCESS,
                payload: res.user,
            });
            callback();
        })
        .catch((err) => {
            dispatch({
                type: RESET_PASSWORD_ERROR,
            });
        });
};