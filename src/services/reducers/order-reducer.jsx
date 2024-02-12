import {
    GET_ORDER_REQUEST,
    GET_ORDER_SUCCESS,
    GET_ORDER_FAILED,
} from '../actions/order-actions.jsx';


const initialState = {
    data: 0,
    orderRequest: false,
    orderSuccess: false,
    orderFailed: false,
};

export const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ORDER_REQUEST:
            return {
                ...state,
                orderRequest: true,
            };
        case GET_ORDER_SUCCESS:
            return {
                ...state,
                data: action.payload,
                orderSuccess: true
            };
        case GET_ORDER_FAILED:
            return {
                ...state,
                orderFailed: true
            };
        default:
            return state;
    }
};