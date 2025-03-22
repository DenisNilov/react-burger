import ConstructorIngredient from '../constructor-ingredient/constructor-ingredient.jsx';

export const IngredientsList = ({ ingredients }) => {
    return (
        ingredients.map((ingredient, index) =>
            <ConstructorIngredient
                data={ingredient}
                key={ingredient.id}
                index={index}
            />))
}
