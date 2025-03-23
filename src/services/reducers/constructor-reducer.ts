import {
    ADD_ING_CONSTRUCTOR,
    SORT_ING_CONSTRUCTOR,
    DELETE_ING_CONSTRUCTOR,
    SET_BUN_CONSTRUCTOR,
    RESET_ING_CONSTRUCTOR,
} from '../actions/constructor-actions';
import { IIngredient, IAction } from '../types/data';

interface IConstructorState {
    bun: IIngredient | null;
    ingredients: Array<IIngredient> | null;
}

export const initialState: IConstructorState = {
    bun: null,
    ingredients: null,
};

export const constructorReducer = (state = initialState, action: IAction) => {
    switch (action.type) {
        case ADD_ING_CONSTRUCTOR:
            if (!state.ingredients) {
                return {
                    ...state,
                    ingredients: [
                        action.payload,
                    ],
                };
            } else {
                return {
                    ...state,
                    ingredients: [
                        ...state.ingredients,
                        action.payload
                    ],
                };
            }
        case SET_BUN_CONSTRUCTOR:
            return {
                ...state,
                bun: action.payload
            };
        case DELETE_ING_CONSTRUCTOR:
            if (state.ingredients) {
                return {
                    ...state,
                    ingredients: state.ingredients.filter((ingredient) => ingredient.id !== action.payload)
                }
            } else {
                return state;
            }

        case SORT_ING_CONSTRUCTOR:
            if (state.ingredients) {
                state.ingredients.splice(
                    action.payload.to,
                    0,
                    state.ingredients.splice(action.payload.from, 1)[0]
                );
                return {
                    ...state,
                    ingredients: state.ingredients
                };
            } else {
                return state;
            }

        case RESET_ING_CONSTRUCTOR: {
            return initialState;
        }
        default: {
            return state;
        }
    }
};