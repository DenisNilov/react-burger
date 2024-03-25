import {
    ADD_ING_CONSTRUCTOR,
    SORT_ING_CONSTRUCTOR,
    DELETE_ING_CONSTRUCTOR,
    SET_BUN_CONSTRUCTOR,
    RESET_ING_CONSTRUCTOR,
} from '../actions/constructor-actions.jsx';

export const initialState = {
    bun: null,
    ingredients: null,
};

export const constructorReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ING_CONSTRUCTOR:
            if (!state.ingredients) {
                return {
                    ...state,
                    ingredients: [
                        {
                            ...action.payload,
                            id: Date.now().toString()
                        },
                    ],
                };
            } else {
                return {
                    ...state,
                    ingredients: [
                        ...state.ingredients,
                        {
                            ...action.payload,
                            id: Date.now().toString()
                        },
                    ],
                };
            }
        case SET_BUN_CONSTRUCTOR:
            return {
                ...state,
                bun: action.payload
            };
        case DELETE_ING_CONSTRUCTOR:
            return {
                ...state,
                ingredients: state.ingredients.filter((ingredient) => ingredient.id !== action.payload)
            };
        case SORT_ING_CONSTRUCTOR:
            const ingredients = [...state.ingredients];
            ingredients.splice(
                action.payload.to,
                0,
                ingredients.splice(action.payload.from, 1)[0]
            );
            return {
                ...state,
                ingredients,
            };
        case RESET_ING_CONSTRUCTOR: {
            return initialState;
        }
        default: {
            return state;
        }
    }
};