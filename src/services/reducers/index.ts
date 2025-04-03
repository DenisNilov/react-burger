import { combineReducers } from "redux";
import { ingredientsReducer } from './ingredients-reducer';
import { orderReducer } from './order-reducer';
import { constructorReducer } from './constructor-reducer';
import { ingredientDetailsReducer } from './ingredient-details-reducer';
import { userReducer } from './user-reducer';

export const rootReducer = combineReducers({
    ingredients: ingredientsReducer,
    order: orderReducer,
    burgerConstructor: constructorReducer,
    details: ingredientDetailsReducer,
    user: userReducer
});