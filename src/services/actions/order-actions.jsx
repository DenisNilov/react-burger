import { request } from '../../utils/utils.js';

export const GET_ORDER_REQUEST = 'GET_ORDER_REQUEST';
export const GET_ORDER_SUCCESS = 'GET_ORDER_SUCCESS';
export const GET_ORDER_FAILED = 'GET_ORDER_FAILED';

export const postOrderRequestAction = () => ({
    type: GET_ORDER_REQUEST,
});

export const postOrderSuccessAction = data => ({
    type: GET_ORDER_SUCCESS,
    payload: data,
});

export const postOrderFailedAction = error => ({
    type: GET_ORDER_FAILED,
    payload: error,
});


export const postOrderAction = idIngredients =>
    async (dispatch) => {
        dispatch(postOrderRequestAction());
        try {
            return await request(`orders`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({
                    "ingredients": idIngredients
                })
            })
                .then(data => console.log(data))
                .then(data => dispatch(postOrderSuccessAction(data)))
        } catch (error) {
            dispatch(postOrderFailedAction(error));
        }
    };

//