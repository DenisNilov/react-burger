import React from 'react';
import style from './burger-ingredients.module.css';
import Tabs from '../burger-ingredienrs-tabs/burger-ingredienrs-tabs.jsx';
import IngredientsComponentList from '../burger-ingredients-component-list/burger-ingredients-component-list.jsx';
import PropTypes from 'prop-types';
import { ingredientsPropTypes } from '../../utils/constants.js'


const BurgerIngredients = ({ ingredients }) => {

    const buns = React.useMemo(() => ingredients.filter(ingredient => ingredient.type === 'bun'), [ingredients]);
    const sauce = React.useMemo(() => ingredients.filter(ingredient => ingredient.type === 'sauce'), [ingredients]);
    const main = React.useMemo(() => ingredients.filter(ingredient => ingredient.type === 'main'), [ingredients]);


    return (
        <section className={style.burger_ingredients}>
            <h1 className="text text_type_main-large pt-10 pb-5">Соберите бургер</h1>
            <Tabs />
            <ul className={style.burger_ingredients_list}>
                <IngredientsComponentList
                    name={'Булки'}
                    ingredients={buns}
                />
                <IngredientsComponentList
                    name={'Соусы'}
                    ingredients={sauce}
                />
                <IngredientsComponentList
                    name={'Начинки'}
                    ingredients={main}
                />
            </ul>
        </section >
    )

}

BurgerIngredients.propTypes = {
    ingredients: PropTypes.arrayOf(ingredientsPropTypes.isRequired).isRequired,
}

export default BurgerIngredients;