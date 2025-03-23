import { IIngredient } from "../types/data";

export const ADD_ING_CONSTRUCTOR = 'ADD_ING_CONSTRUCTOR';
export const SORT_ING_CONSTRUCTOR = 'SORT_ING_CONSTRUCTOR';
export const DELETE_ING_CONSTRUCTOR = 'DELETE_ING_CONSTRUCTOR';
export const SET_BUN_CONSTRUCTOR = 'SET_BIN_CONSTRUCTOR';
export const RESET_ING_CONSTRUCTOR = 'RESET_ING_CONSTRUCTOR';

export const addIngConstructor = (ingredient: IIngredient) =>
({
    type: ADD_ING_CONSTRUCTOR,
    payload: {
        ...ingredient,
        id: Date.now().toString()
    }
})

export const deleteIngConstructor = (ingId: string) =>
({
    type: DELETE_ING_CONSTRUCTOR,
    payload: ingId
})

export const setBunConstructor = (bun: IIngredient) =>
({
    type: SET_BUN_CONSTRUCTOR,
    payload: bun
})

export const sortIngConstructor = (dragIndex: number, hoverIndex: number) => ({
    type: SORT_ING_CONSTRUCTOR,
    payload: {
        from: dragIndex,
        to: hoverIndex,
    }
})
export const resetIngConstructor = () =>
    ({ type: RESET_ING_CONSTRUCTOR })