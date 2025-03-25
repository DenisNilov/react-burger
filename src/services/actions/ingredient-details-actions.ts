import { IIngredient, IIngDetailsInitial } from "../types/data";

export const SET_INGREDIENT_DETAILS = "SET_INGREDIENT_DETAILS";
export const RESET_INGREDIENT_DETAILS = "RESET_INGREDIENT_DETAILS";

interface IAddIngredientDetailsAction {
  readonly type: typeof SET_INGREDIENT_DETAILS;
  readonly payload: IIngDetailsInitial;
}
interface IResetIngredientDetailsAction {
  readonly type: typeof RESET_INGREDIENT_DETAILS;
}

export type TIngredientDetailsAction = IAddIngredientDetailsAction | IResetIngredientDetailsAction;


export const addIngredientDetails = (ingredient: IIngredient): IAddIngredientDetailsAction =>
({
  type: SET_INGREDIENT_DETAILS,
  payload: {
    name: ingredient.name,
    image_large: ingredient.image_large,
    calories: ingredient.calories,
    proteins: ingredient.proteins,
    fat: ingredient.fat,
    carbohydrates: ingredient.carbohydrates,
  },
});

export const resetIngredientDetails = (): IResetIngredientDetailsAction => {
  return { type: RESET_INGREDIENT_DETAILS }
};