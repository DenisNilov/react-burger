import { request, getToken } from '../../utils/utils';

export const POST_ORDER_REQUEST = 'POST_ORDER_REQUEST';
export const POST_ORDER_SUCCESS = 'POST_ORDER_SUCCESS';
export const POST_ORDER_FAILED = 'POST_ORDER_FAILED';


export const postOrderAction = ingredients => dispatch => {

    const token = getToken();

    dispatch({ type: POST_ORDER_REQUEST })
    request('orders', 'POST', { ingredients }, token)
        .then(data =>
            dispatch({
                type: POST_ORDER_SUCCESS,
                payload: data,
            })
        ).catch(error => dispatch({ type: POST_ORDER_FAILED }))
}
