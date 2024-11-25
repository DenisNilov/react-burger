import { request } from '../../utils/utils.js';

export const POST_ORDER_REQUEST = 'POST_ORDER_REQUEST';
export const POST_ORDER_SUCCESS = 'POST_ORDER_SUCCESS';
export const POST_ORDER_FAILED = 'POST_ORDER_FAILED';


export const postOrderAction = ingredients => dispatch => {
    dispatch({ type: POST_ORDER_REQUEST })
    request('orders', 'POST', {
        ingredients: ingredients
    }).then(data =>
        dispatch({
            type: POST_ORDER_SUCCESS,
            payload: data,
        })
    ).catch(error => dispatch({ type: POST_ORDER_FAILED }))
}
