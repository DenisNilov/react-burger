import {
    SET_INGREDIENT_DETAILS,
    RESET_INGREDIENT_DETAILS
} from '../actions/ingredient-details-actions';
import { IAction } from "../types/data";

export const initialState = {
    ingredientDetails: null
}




export const ingredientDetailsReducer = (state = initialState, action: IAction) => {

    switch (action.type) {
        case SET_INGREDIENT_DETAILS: {
            return {
                ...state,
                ingredientDetails: action.payload
            };
        }
        case RESET_INGREDIENT_DETAILS: {
            return initialState;
        }
        default: {
            return state;
        }
    }
}