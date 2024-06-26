import { request } from '../../utils/utils.js';

export const GET_INGREDIENTS_REQUEST = "GET_INGREDIENTS_REQUEST";
export const GET_INGREDIENTS_FAILED = "GET_INGREDIENTS_FAILED";
export const GET_INGREDIENTS_SUCCESS = "GET_INGREDIENTS_SUCCESS";

export const getIngredientsAction = () => {
    return async (dispatch) => {
        dispatch({ type: GET_INGREDIENTS_REQUEST });
        try {
            return await request(`ingredients`)
                .then(data => dispatch({
                    type: GET_INGREDIENTS_SUCCESS,
                    payload: data.data
                }))
        } catch (error) {
            dispatch({ type: GET_INGREDIENTS_FAILED });
        }
    };
};