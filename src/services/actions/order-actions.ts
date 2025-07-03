import { request, getToken } from '../../utils/utils';
import { AppDispatch } from '../types';
import { IOrder } from '../types/data';

export const POST_ORDER_REQUEST: 'POST_ORDER_REQUEST' = 'POST_ORDER_REQUEST';
export const POST_ORDER_SUCCESS: 'POST_ORDER_SUCCESS' = 'POST_ORDER_SUCCESS';
export const POST_ORDER_FAILED: 'POST_ORDER_FAILED' = 'POST_ORDER_FAILED';
export const RESET_ORDER: 'RESET_ORDER' = 'RESET_ORDER';

export interface IPostOrderDetailsRequestAction {
    readonly type: typeof POST_ORDER_REQUEST;
}
export interface IPostOrderDetailsErrorAction {
    readonly type: typeof POST_ORDER_FAILED;
    readonly payload: string;
}
export interface IPostOrderDetailsSuccessAction {
    readonly type: typeof POST_ORDER_SUCCESS;
    readonly payload: IOrder;
}

export interface IResetOrderDetailsAction {
    readonly type: typeof RESET_ORDER;
    readonly payload: null;
}

export type TOrderAction = IPostOrderDetailsRequestAction | IPostOrderDetailsErrorAction |
    IPostOrderDetailsSuccessAction | IResetOrderDetailsAction;

const postOrderRequest = (): IPostOrderDetailsRequestAction => ({
    type: POST_ORDER_REQUEST
});
const postOrderError = (text: string): IPostOrderDetailsErrorAction => ({
    type: POST_ORDER_FAILED,
    payload: text
});
const postOrdersSuccess = (order: IOrder): IPostOrderDetailsSuccessAction => ({
    type: POST_ORDER_SUCCESS,
    payload: order
});

export const reserOrder = (): IResetOrderDetailsAction => ({
    type: RESET_ORDER,
    payload: null
});
export const postOrderAction = (ingredients: Array<string>) => (dispatch: AppDispatch) => {

    const token = getToken();

    dispatch(postOrderRequest())
    request('orders', 'POST', { ingredients }, token)
        .then(res =>
            dispatch(postOrdersSuccess(res))
        ).catch(error => dispatch(postOrderError("Ошибка при формировании заказа")))
}

export const resetOrderAction = () => (dispatch: AppDispatch) => {
    dispatch(reserOrder())
}