import { BASE_URL } from './constants.js';

const makeResponseCheck = response => {
    if (response.ok) {
        return response.json();
    }
    return Promise.reject(`Ошибка ${response.status}`);
}

const request = (endpoint, options) => fetch(`${BASE_URL}/${endpoint}`, options).then(makeResponseCheck);

export { request };