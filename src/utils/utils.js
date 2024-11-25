import { BASE_URL } from './constants.js';

const api = {
    url: BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
};

const makeResponseCheck = response => {
    if (response.ok) {
        return response.json();
    }
    return Promise.reject(`Ошибка ${response.status}`);
}

const request = (endpoint, method = 'GET', data = null, token = null) => {
    const options = {
        method: method,
        headers: api.headers,
    }
    if (data) options.body = JSON.stringify(data);
    if (token) options.headers = { ...options.headers, 'Authorization': token };
    return fetch(`${BASE_URL}/${endpoint}`, options).then(makeResponseCheck);
}

const setToken = (accessToken) => localStorage.setItem("accessToken", accessToken);

const getToken = () => localStorage.getItem("accessToken");

const resetToken = () => localStorage.setItem("accessToken", null);


const setRefreshToken = (refreshToken) => localStorage.setItem("refreshToken", refreshToken);

const getRefreshToken = () => localStorage.getItem("refreshToken");

const resetRefreshToken = () => localStorage.setItem("refreshToken", null);

const updateAccessToken = (refreshToken) => request(('auth/token'), "POST", { token: refreshToken })


export { request, setToken, getToken, resetToken, setRefreshToken, getRefreshToken, resetRefreshToken, updateAccessToken };