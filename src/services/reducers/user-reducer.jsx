import {
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_ERROR,
    LOGIN_USER_REQUEST,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_ERROR,
    REFRESH_TOKEN_REQUEST,
    REFRESH_TOKEN_SUCCESS,
    REFRESH_TOKEN_ERROR,
} from "../actions/user-actions.jsx";

const initialState = {
    userData: null,

    isAuth: false,

    registerUserRequest: false,
    registerUserError: false,

    loginUserRequest: false,
    loginUserError: false,

    refreshTokenRequest: false,
    refreshTokenError: false,
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_USER_REQUEST: {
            return {
                ...state,
                registerUserRequest: true,
                registerUserError: null,
            };
        }
        case REGISTER_USER_SUCCESS: {
            return {
                ...state,
                userData: {
                    ...state.userData,
                },
                registerUserRequest: false,
                registerUserError: false,
            };
        }

        case REGISTER_USER_ERROR: {
            return {
                ...state,
                registerUserRequest: false,
                registerUserError: true,
            };
        }

        case LOGIN_USER_REQUEST: {
            return {
                ...state,
                loginUserRequest: true,
                loginUserError: false,
            };
        }

        case LOGIN_USER_SUCCESS: {
            return {
                ...state,
                userData: action.payload,
                loginUserRequest: false,
                loginUserError: false,
                isAuth: true,
            };
        }
        case LOGIN_USER_ERROR: {
            return {
                ...state,
                loginUserRequest: false,
                loginUserError: true,
            };
        }

        case REFRESH_TOKEN_REQUEST: {
            return {
                ...state,
                refreshTokenRequest: true,
                refreshTokenError: false,
            };
        }
        case REFRESH_TOKEN_SUCCESS: {
            return {
                ...state,
                userData: action.payload,
                refreshTokenRequest: false,
                refreshTokenError: false,
            };
        }
        case REFRESH_TOKEN_ERROR: {
            return {
                ...state,
                refreshTokenRequest: false,
                refreshTokenError: true,
            };
        }

        default:
            return state;
    }
}