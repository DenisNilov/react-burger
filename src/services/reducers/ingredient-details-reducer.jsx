import {
    SET_INGREDIENT_DETAILS,
    RESET_INGREDIENT_DETAILS
} from '../actions/ingredient-details-actions.jsx';

export const initialState = {
    ingredientDetails: null
}




export const ingredientDetailsReducer = (state = initialState, action) => {

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