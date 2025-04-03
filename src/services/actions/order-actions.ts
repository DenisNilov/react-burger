import { request, getToken } from '../../utils/utils';
import { AppDispatch } from '../types';
import { IIngredient } from '../types/data';
import { IOrder } from '../types/data';

export const POST_ORDER_REQUEST = 'POST_ORDER_REQUEST';
export const POST_ORDER_SUCCESS = 'POST_ORDER_SUCCESS';
export const POST_ORDER_FAILED = 'POST_ORDER_FAILED';

export interface IPostOrderDetailsRequestAction {
    readonly type: typeof POST_ORDER_REQUEST;
}
export interface IPostOrderDetailsErrorAction {
    readonly type: typeof POST_ORDER_FAILED;
    readonly errorText: string;
}
export interface IPostOrderDetailsSuccessAction {
    readonly type: typeof POST_ORDER_SUCCESS;
    readonly payload: IOrder;
}

export type TOrderAction = IPostOrderDetailsRequestAction | IPostOrderDetailsErrorAction |
    IPostOrderDetailsSuccessAction;

export const postOrderRequest = (): IPostOrderDetailsRequestAction => ({
    type: POST_ORDER_REQUEST
});
export const postOrderError = (text: string): IPostOrderDetailsErrorAction => ({
    type: POST_ORDER_FAILED,
    errorText: text
});
export const postOrdersSuccess = (order: IOrder): IPostOrderDetailsSuccessAction => ({
    type: POST_ORDER_SUCCESS,
    payload: order
});


export const postOrderAction = (ingredients: Array<IIngredient>) => (dispatch: AppDispatch) => {

    const token = getToken();

    dispatch(postOrderRequest())
    request('orders', 'POST', { ingredients }, token)
        .then(res =>
            dispatch(postOrdersSuccess(res))
        ).catch(error => dispatch(postOrderError("Ошибка при формировании заказа")))
}
