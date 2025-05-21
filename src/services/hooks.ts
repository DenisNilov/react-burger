import {
    TypedUseSelectorHook,
    useDispatch as dispatchHook,
    useSelector as selectorHook
} from 'react-redux';
import { AppDispatch, RootState } from './types/index';
import { useMemo } from "react";
import { IIngredient } from "../services/types/data";

export const useDispatch = () => dispatchHook<AppDispatch>();
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;

export const useTotalPrice = (ingredients: Array<IIngredient> | null, bun: IIngredient | null) => {
    const price = useMemo(() => {
        const sumBun = bun ? bun.price * 2 : 0;

        const sumIngredients = ingredients ? ingredients.reduce((accumulator: number, ingredient: IIngredient) => {
            return accumulator + ingredient.price
        }, 0) : 0;

        return sumBun + sumIngredients;
    }, [ingredients, bun]);
    return price;
}
