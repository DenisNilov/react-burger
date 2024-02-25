import { request } from '../../utils/utils.js';

export const GET_INGREDIENTS_REQUEST = "GET_INGREDIENTS_REQUEST";
export const GET_INGREDIENTS_FAILED = "GET_INGREDIENTS_FAILED";
export const GET_INGREDIENTS_SUCCESS = "GET_INGREDIENTS_SUCCESS";

export const getIngredientsRequest = () => ({
    type: GET_INGREDIENTS_REQUEST,
});

export const getIngredientsSuccess = data => ({
    type: GET_INGREDIENTS_SUCCESS,
    payload: data,
});

export const getIngredientsFailed = () => ({
    type: GET_INGREDIENTS_FAILED,
});

export const getIngredientsAction = () => {
    return async (dispatch) => {
        dispatch(getIngredientsRequest());
        try {
            return await request(`ingredients`)
                .then(data => dispatch(getIngredientsSuccess(data.data)))
        } catch (error) {
            dispatch(getIngredientsFailed());
        }
    };
};