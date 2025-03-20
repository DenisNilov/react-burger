import { combineReducers } from "redux";
import { ingredientsReducer } from './ingredients-reducer.jsx';
import { orderReducer } from './order-reducer.jsx';
import { constructorReducer } from './constructor-reducer.jsx';
import { ingredientDetailsReducer } from './ingredient-details-reducer.jsx';
import { userReducer } from './user-reducer.jsx';

export const rootReducer = combineReducers({
    ingredients: ingredientsReducer,
    order: orderReducer,
    burgerConstructor: constructorReducer,
    details: ingredientDetailsReducer,
    user: userReducer
});