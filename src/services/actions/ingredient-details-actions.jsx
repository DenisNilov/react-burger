export const SET_INGREDIENT_DETAILS = "SET_INGREDIENT_DETAILS";
export const RESET_INGREDIENT_DETAILS = "RESET_INGREDIENT_DETAILS";

export const addIngredientDetails = ingredient => {
  return {
    type: SET_INGREDIENT_DETAILS,
    payload: {
      name: ingredient.name,
      image: ingredient.image_large,
      calories: ingredient.calories,
      proteins: ingredient.proteins,
      fat: ingredient.fat,
      carbohydrates: ingredient.carbohydrates,
    },
  };
};

export const resetIngredientDetails = () => {
  return { type: RESET_INGREDIENT_DETAILS }
};