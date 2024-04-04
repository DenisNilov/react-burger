import ConstructorIngredient from '../constructor-ingredient/constructor-ingredient.jsx';
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { ingredientsPropTypes } from '../../utils/constants.js'

export const BunTop = ({ ingredient }) => {
    return (
        <ConstructorElement
            type="top"
            isLocked={true}
            text={`${ingredient.name} (верх)`}
            price={ingredient.price}
            thumbnail={ingredient.image}
        />
    );
};


export const BunBottom = ({ ingredient }) => {
    return (
        <ConstructorElement
            type="bottom"
            isLocked={true}
            text={`${ingredient.name} (низ)`}
            price={ingredient.price}
            thumbnail={ingredient.image}
        />
    );
};


export const IngredientsList = ({ ingredients }) => {
    return (
        ingredients.map((ingredient, index) =>
            <ConstructorIngredient
                data={ingredient}
                key={ingredient.id}
                index={index}
            />))
}

BunTop.propTypes = {
    ingredient: ingredientsPropTypes
}

BunBottom.propTypes = {
    ingredient: ingredientsPropTypes
}

IngredientsList.propTypes = {
    ingredient: ingredientsPropTypes
}