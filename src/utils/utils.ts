import { BASE_URL } from './constants';
import { IIngredient } from '../services/types/data';

interface IOptions<T = any> {
    method: string;
    headers: {
        "Content-Type": string;
        'Authorization'?: string;
    },
    body?: T;
}

interface Response {
    [key: string]: any;
}


type TToken = string | null;

type TData = {
    [key: string]: any;
}

const api = {
    url: BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
};


const makeResponseCheck = (response: Response) => {
    if (response.ok) {
        return response.json();
    }
    return Promise.reject(`Ошибка ${response.status}`);
}

const request = (endpoint: string, method = 'GET', data: TData | null = null, token: TToken = null) => {
    const options: IOptions = {
        method: method,
        headers: api.headers
    }
    if (data) options.body = JSON.stringify(data);
    if (token) options.headers = { ...options.headers, 'Authorization': token };
    return fetch(`${BASE_URL}/${endpoint}`, options).then(makeResponseCheck);
}

const setToken = (accessToken: string) => localStorage.setItem("accessToken", accessToken);

const getToken = () => localStorage.getItem("accessToken");

const resetToken = () => localStorage.setItem("accessToken", '');


const setRefreshToken = (refreshToken: string) => localStorage.setItem("refreshToken", refreshToken);

const getRefreshToken = () => localStorage.getItem("refreshToken");

const resetRefreshToken = () => localStorage.setItem("refreshToken", '');

const updateAccessToken = (refreshToken: string) => request(('auth/token'), "POST", { token: refreshToken });

const getUserInfo = (token: string) => request('auth/user', "GET", null, token);

const updateUserInfo = (upData: TData, token: TToken) => request('auth/user', "PATCH", upData, token);

const postNewPassword = (password: string, code: string) => request('reset-password', "POST", { password, token: code });

const postEmailForReset = (email: string) => request('forgot-password', "POST", { email });

const setIngredient = (ingredient: IIngredient) => {
    localStorage.setItem("ingredient", JSON.stringify(ingredient));
}

const getIngredient = () => {
    const item = localStorage.getItem("ingredient");
    return item ? JSON.parse(item) : null;
};

const resetIngredient = () => localStorage.setItem("ingredient", '');

export {
    request, setToken, getToken, resetToken, setRefreshToken,
    getRefreshToken, resetRefreshToken, updateAccessToken,
    getUserInfo, updateUserInfo, postNewPassword, postEmailForReset,
    getIngredient, setIngredient, resetIngredient
};