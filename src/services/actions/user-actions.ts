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
    postEmailForReset
} from '../../utils/utils';
import { AppDispatch, ICallback } from '../types';
import { IUser } from "../types/data";

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

export const FORGOT_PASSWORD_REQUEST = "FORGOT_PASSWORD_REQUEST";
export const FORGOT_PASSWORD_SUCCESS = "FORGOT_PASSWORD_SUCCESS";
export const FORGOT_PASSWORD_ERROR = "FORGOT_PASSWORD_ERROR";

interface ILogoutUsertAction {
    readonly type: typeof LOGOUT_USER;
}

interface IRegisterUserRequestAction {
    readonly type: typeof REGISTER_USER_REQUEST;
}
interface IRegisterUserSuccessAction {
    readonly type: typeof REGISTER_USER_SUCCESS;
    readonly payload: IUser;
}
interface IRegisterUserErrorAction {
    readonly type: typeof REGISTER_USER_ERROR;
}

interface ILoginUserRequestAction {
    readonly type: typeof LOGIN_USER_REQUEST;
}
interface ILoginUserSuccessAction {
    readonly type: typeof LOGIN_USER_SUCCESS;
    readonly payload: IUser;
}
interface ILoginUserErrorAction {
    readonly type: typeof LOGIN_USER_ERROR;
}

interface IRefreshUserRequestAction {
    readonly type: typeof REFRESH_TOKEN_REQUEST;
}
interface IRefreshUserSuccessAction {
    readonly type: typeof REFRESH_TOKEN_SUCCESS;
    readonly payload: string;
}
interface IRefreshUserErrorAction {
    readonly type: typeof REFRESH_TOKEN_ERROR;
}

interface IForgotUserRequestAction {
    readonly type: typeof FORGOT_PASSWORD_REQUEST;
}
interface IForgotUserSuccessAction {
    readonly type: typeof FORGOT_PASSWORD_SUCCESS;
    readonly payload: IUser;
}
interface IForgotUserErrorAction {
    readonly type: typeof FORGOT_PASSWORD_ERROR;
}

interface IResetPasswordRequestAction {
    readonly type: typeof RESET_PASSWORD_REQUEST;
}
interface IResetPasswordSuccessAction {
    readonly type: typeof RESET_PASSWORD_SUCCESS;
    readonly payload: IUser;
}
interface IResetPasswordErrorAction {
    readonly type: typeof RESET_PASSWORD_ERROR;
}

interface IUpdateUserRequestAction {
    readonly type: typeof UPDATE_USER_REQUEST;
}
interface IUpdateUserSuccessAction {
    readonly type: typeof UPDATE_USER_SUCCESS;
    readonly payload: IUser;
}
interface IUpdateUserErrorAction {
    readonly type: typeof UPDATE_USER_ERROR;
}

interface IGetUserRequestAction {
    readonly type: typeof GET_USER_REQUEST;
}
interface IGetUserSuccessAction {
    readonly type: typeof GET_USER_SUCCESS;
    readonly payload: IUser;
}
interface IGetUserErrorAction {
    readonly type: typeof GET_USER_ERROR;
}


export type TUserAction = ILogoutUsertAction | IRegisterUserRequestAction | IRegisterUserSuccessAction |
    IRegisterUserErrorAction | ILoginUserRequestAction | ILoginUserSuccessAction | ILoginUserErrorAction |
    IForgotUserRequestAction | IForgotUserSuccessAction | IForgotUserErrorAction | IRefreshUserRequestAction |
    IRefreshUserSuccessAction | IRefreshUserErrorAction | IResetPasswordRequestAction | IResetPasswordSuccessAction |
    IResetPasswordErrorAction | IUpdateUserRequestAction | IUpdateUserSuccessAction | IUpdateUserErrorAction |
    IGetUserRequestAction | IGetUserSuccessAction | IGetUserErrorAction

const logoutUserSuccess = (): ILogoutUsertAction => ({
    type: LOGOUT_USER,
});

const loginUserRequest = (): ILoginUserRequestAction => ({
    type: LOGIN_USER_REQUEST
});
const loginUserSuccess = (user: IUser): ILoginUserSuccessAction => ({
    type: LOGIN_USER_SUCCESS,
    payload: user
});
const loginUserError = (): ILoginUserErrorAction => ({
    type: LOGIN_USER_ERROR
});

const registerUserRequest = (): IRegisterUserRequestAction => ({
    type: REGISTER_USER_REQUEST
});
const registerUserSuccess = (user: IUser): IRegisterUserSuccessAction => ({
    type: REGISTER_USER_SUCCESS,
    payload: user
});
const registerUserError = (): IRegisterUserErrorAction => ({
    type: REGISTER_USER_ERROR
});

const updateUserRequest = (): IUpdateUserRequestAction => ({
    type: UPDATE_USER_REQUEST
});
const updateUserSuccess = (user: IUser): IUpdateUserSuccessAction => ({
    type: UPDATE_USER_SUCCESS,
    payload: user
});
const updateUserError = (): IUpdateUserErrorAction => ({
    type: UPDATE_USER_ERROR
});

const forgotUserRequest = (): IForgotUserRequestAction => ({
    type: FORGOT_PASSWORD_REQUEST
});
const forgotUserSuccess = (user: IUser): IForgotUserSuccessAction => ({
    type: FORGOT_PASSWORD_SUCCESS,
    payload: user
});
const forgotUserError = (): IForgotUserErrorAction => ({
    type: FORGOT_PASSWORD_ERROR
});

const resetPassUserRequest = (): IResetPasswordRequestAction => ({
    type: RESET_PASSWORD_REQUEST
});
const resetPassUserSuccess = (user: IUser): IResetPasswordSuccessAction => ({
    type: RESET_PASSWORD_SUCCESS,
    payload: user
});
const resetPassUserError = (): IResetPasswordErrorAction => ({
    type: RESET_PASSWORD_ERROR
});

const updateTokenRequest = (): IRefreshUserRequestAction => ({
    type: REFRESH_TOKEN_REQUEST
});
const updateTokenSuccess = (refreshToken: string): IRefreshUserSuccessAction => ({
    type: REFRESH_TOKEN_SUCCESS,
    payload: refreshToken
});
const updateTokenError = (): IRefreshUserErrorAction => ({
    type: REFRESH_TOKEN_ERROR
});

const getUserRequest = (): IGetUserRequestAction => ({
    type: GET_USER_REQUEST
});
const getUserSuccess = (user: IUser): IGetUserSuccessAction => ({
    type: GET_USER_SUCCESS,
    payload: user
});
const getUserError = (): IGetUserErrorAction => ({
    type: GET_USER_ERROR
});


export const registerUserThunk = (user: IUser) => (dispatch: AppDispatch) => {
    dispatch(registerUserRequest());
    request('auth/register', 'POST', {
        email: user.email,
        password: user.password,
        name: user.name
    }).then(res => {
        setRefreshToken(res.refreshToken);
        setToken(res.accessToken);
        dispatch(registerUserSuccess(user));
    }).catch(err => dispatch(registerUserError()));
};

export const loginUserThunk = (user: IUser) => (dispatch: AppDispatch) => {
    dispatch(loginUserRequest());
    request('auth/login', 'POST', {
        email: user.email,
        password: user.password
    }).then(res => {
        setRefreshToken(res.refreshToken);
        setToken(res.accessToken);
        dispatch(loginUserSuccess(user));
    }).catch((err) => {
        dispatch(loginUserError());
    });
};


export const updateToken = (refreshToken: string) => (dispatch: AppDispatch) => {
    dispatch(updateUserRequest());
    updateAccessToken(refreshToken)
        .then(res => {
            setRefreshToken(res.refreshToken);
            setToken(res.accessToken);
            dispatch(updateUserSuccess(res));
        }).catch(err => dispatch(updateUserError()));
};

export const logoutThunk = (refreshToken: string | null) => (dispatch: AppDispatch) => {
    request('auth/logout', 'POST', {
        token: refreshToken
    }).then((res) => {
        localStorage.clear();
        resetRefreshToken();
        resetToken();
        dispatch(logoutUserSuccess());
    }).catch((err) => console.log(err));
};

export const updateUserData = (user: IUser, refreshToken: string) => (dispatch: AppDispatch) => {
    dispatch(updateTokenRequest());
    updateUserInfo(user, refreshToken)
        .then(res => {
            console.log(res)
            dispatch(updateTokenSuccess(res.user));
        }).catch(err => dispatch(updateTokenError()));
};

export const getUserData = () => (dispatch: AppDispatch) => {
    dispatch(getUserRequest());
    const token = getToken();
    if (token) {
        getUserInfo(token)
            .then(res => {
                dispatch(getUserSuccess(res.user));
            })
            .catch(err => dispatch(getUserError()));
    } else {
        dispatch(getUserError());
    }
};

export const resetPassThunk = (password: string, code: string, callback: ICallback) => (dispatch: AppDispatch) => {
    dispatch(resetPassUserRequest());
    postNewPassword(password, code)
        .then(res => {
            console.log(res);
            dispatch(resetPassUserSuccess(res.user));
            callback();
        }).catch(err => resetPassUserError());
};

export const forgotPassThunk = (email: string, callback: ICallback) => (dispatch: AppDispatch) => {
    dispatch(forgotUserRequest());
    postEmailForReset(email)
        .then((res) => {
            getRefreshToken();
            console.log(res);
            dispatch(forgotUserSuccess(res.user));
            callback();
        }).catch(err => dispatch(forgotUserError()));
}