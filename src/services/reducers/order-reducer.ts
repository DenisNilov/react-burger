import {
    POST_ORDER_REQUEST,
    POST_ORDER_SUCCESS,
    POST_ORDER_FAILED,
} from '../actions/order-actions';
import { IAction } from '../types/data';


const initialState = {
    data: null,
    orderRequest: false,
    orderSuccess: false,
    orderFailed: false,
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
                orderRequest: false
            };
        default:
            return state;
    }
};