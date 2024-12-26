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
    LOGOUT_USER,
    UPDATE_USER_REQUEST,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_ERROR,
    GET_USER_REQUEST,
    GET_USER_SUCCESS,
    GET_USER_ERROR,
    FORGOT_PASSWORD_REQUEST,
    FORGOT_PASSWORD_SUCCESS,
    FORGOT_PASSWORD_ERROR,
    RESET_PASSWORD_REQUEST,
    RESET_PASSWORD_SUCCESS,
    RESET_PASSWORD_ERROR,
} from "../actions/user-actions.jsx";

const initialState = {
    userData: null,

    isAuth: false,

    haveVisitedPage: false,

    registerUserRequest: false,
    registerUserError: false,

    loginUserRequest: false,
    loginUserError: false,

    forgotPasswordRequest: false,
    forgotPasswordError: false,

    resetPasswordRequest: false,
    reserPasswordError: false,

    refreshTokenRequest: false,
    refreshTokenError: false,

    checkUserRequest: null,
    checkUserError: false,
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

        case LOGOUT_USER: {
            return { ...state, isAuth: false, userData: null };
        }

        case UPDATE_USER_REQUEST: {
            return {
                ...state,
                updateDataRequest: true,
                updateDataError: false,
            };
        }
        case UPDATE_USER_SUCCESS: {
            return {
                ...state,
                updateDataRequest: false,
                updateDataError: false,
                userData: {
                    ...state.userData,
                    email: action.payload.email,
                    name: action.payload.name,
                },
            };
        }
        case UPDATE_USER_ERROR: {
            return {
                ...state,
                updateDataRequest: false,
                updateDataError: true,
            };
        }

        case GET_USER_REQUEST: {
            return {
                ...state,
                checkUserRequest: true,
                checkUserError: false,
            };
        }
        case GET_USER_SUCCESS: {
            return {
                ...state,
                userData: {
                    ...state.userData,
                    email: action.payload.email,
                    name: action.payload.name,
                },
                isAuth: true,
                checkUserRequest: false,
                checkUserError: false,
            };
        }
        case GET_USER_ERROR: {
            return {
                ...state,
                checkUserRequest: false,
                checkUserError: true,
            };
        }

        case FORGOT_PASSWORD_REQUEST: {
            return {
                ...state,
                forgotPasswordRequest: true,
                forgotPasswordError: false,
            };
        }
        case FORGOT_PASSWORD_SUCCESS: {
            return {
                ...state,
                userData: action.payload,
                forgotPasswordRequest: false,
                forgotPasswordError: false,
                haveVisitedPage: true,
            };
        }
        case FORGOT_PASSWORD_ERROR: {
            return {
                ...state,
                forgotPasswordRequest: false,
                forgotPasswordError: true,
            };
        }

        case RESET_PASSWORD_REQUEST: {
            return {
                ...state,
                resetUserRequest: true,
                resetUserError: false,
            };
        }

        case RESET_PASSWORD_SUCCESS: {
            return {
                ...state,
                userData: action.payload,
                resetUserRequest: false,
                resetUserError: false,
            };
        }
        case RESET_PASSWORD_ERROR: {
            return {
                ...state,
                resetUserRequest: false,
                resetUserError: true,
            };
        }

        default:
            return state;
    }
}