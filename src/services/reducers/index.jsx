import { combineReducers } from "redux";
import { ingredientsReducer } from './ingredients-reducer.jsx';
import { orderReducer } from './order-reducer.jsx';

export const rootReducer = combineReducers({
    ingredients: ingredientsReducer,
    order: orderReducer
});