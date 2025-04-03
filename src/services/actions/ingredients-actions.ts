import { request } from '../../utils/utils';
import { AppDispatch } from '../types/index';
import { IIngredient } from "../types/data";

export const GET_INGREDIENTS_REQUEST = "GET_INGREDIENTS_REQUEST";
export const GET_INGREDIENTS_FAILED = "GET_INGREDIENTS_FAILED";
export const GET_INGREDIENTS_SUCCESS = "GET_INGREDIENTS_SUCCESS";

export interface IGetItemsRequestAction {
    readonly type: typeof GET_INGREDIENTS_REQUEST;
}
export interface IGetItemsErrorAction {
    readonly type: typeof GET_INGREDIENTS_FAILED;
}
export interface IGetItemsSuccessAction {
    readonly type: typeof GET_INGREDIENTS_SUCCESS;
    readonly payload: Array<IIngredient>;
}

export type TGetItemsActions = IGetItemsRequestAction | IGetItemsErrorAction | IGetItemsSuccessAction;

const getItemsRequest = (): IGetItemsRequestAction => {
    return {
        type: GET_INGREDIENTS_REQUEST,
    };
};

const getItemsError = (): IGetItemsErrorAction => {
    return {
        type: GET_INGREDIENTS_FAILED,
    };
};

const getItemsSuccess = (items: Array<IIngredient>): IGetItemsSuccessAction => {
    return {
        type: GET_INGREDIENTS_SUCCESS,
        payload: items
    };
};


export const getIngredientsAction = () => (dispatch: AppDispatch): void => {
    dispatch(getItemsRequest());
    request('ingredients')
        .then(res => dispatch(getItemsSuccess(res.data)))
        .catch(err => dispatch(getItemsError()));
};

