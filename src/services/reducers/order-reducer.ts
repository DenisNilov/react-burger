import {
    POST_ORDER_REQUEST,
    POST_ORDER_SUCCESS,
    POST_ORDER_FAILED,
    RESET_ORDER,
} from '../actions/order-actions';
import { IAction, IOrder } from '../types/data';

export interface IOrderState {
    data: IOrder | null;
    orderRequest: boolean;
    orderSuccess: boolean;
    orderFailed: boolean;
    error: string | null;
}


const initialState: IOrderState = {
    data: null,
    orderRequest: false,
    orderSuccess: false,
    orderFailed: false,
    error: null,
};

export const orderReducer = (state = initialState, action: IAction) => {
    switch (action.type) {
        case POST_ORDER_REQUEST:
            return {
                ...state,
                orderRequest: true,
                orderFailed: false
            };
        case POST_ORDER_SUCCESS:
            return {
                ...state,
                data: action.payload,
                orderSuccess: true,
                orderRequest: false
            };
        case POST_ORDER_FAILED:
            return {
                ...state,
                orderFailed: true,
                orderRequest: false,
                error: action.payload
            };
            case RESET_ORDER:
            return {
                ...state,
                data: null,
                orderFailed: false,
                orderRequest: false,
            };
        default:
            return state;
    }
};