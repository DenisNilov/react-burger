import ConstructorIngredient from '../constructor-ingredient/constructor-ingredient.jsx';
import { ingredientsPropTypes } from '../../utils/constants.js'

export const IngredientsList = ({ ingredients }) => {
    return (
        ingredients.map((ingredient, index) =>
            <ConstructorIngredient
                data={ingredient}
                key={ingredient.id}
                index={index}
            />))
}


IngredientsList.propTypes = {
    ingredient: ingredientsPropTypes
}