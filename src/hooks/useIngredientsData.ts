import { useSelector } from "../services/hooks";
import { useCallback, useMemo } from "react";
import { IIngredient } from "../services/types/data";

interface IIngredientsDataDict {
    [ingredientsData: string]: IIngredient;
}

export const useIngredientsData = () => {
    const { ingredients } = useSelector(state => state.ingredients);

    const ingredientsDataDict = useMemo<IIngredientsDataDict>(() => {
        const ingredientsData: IIngredientsDataDict = {}
        ingredients.forEach((ingredient: IIngredient) => ingredientsData[ingredient._id] = ingredient)
        return ingredientsData
    }, [ingredients])

    const getIngredientImage = useCallback((ingredientId: string) => ingredientsDataDict[ingredientId].image, [ingredientsDataDict])
    const getIngredientPrice = useCallback((ingredientId: string) => ingredientsDataDict[ingredientId].price, [ingredientsDataDict])
    const getIngredientData = useCallback((ingredientId: string) => ingredientsDataDict[ingredientId], [ingredientsDataDict])

    return useMemo(
        () => ({ ingredientsDataDict, getIngredientPrice, getIngredientImage, getIngredientData }),
        [getIngredientImage, getIngredientPrice, getIngredientData, ingredientsDataDict])
}