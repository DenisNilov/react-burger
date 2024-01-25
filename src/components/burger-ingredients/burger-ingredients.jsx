import React from 'react';
import style from './burger-ingredients.module.css';
import Tabs from '../burger-ingredienrs-tabs/burger-ingredienrs-tabs.jsx';
import IngredientsComponentList from '../burger-ingredients-component-list/burger-ingredients-component-list.jsx';
import PropTypes from 'prop-types';
import { ingredientsPropTypes } from '../../utils/constants.js'


const BurgerIngredients = ({ ingredients }) => {

    const getIngredients = React.useMemo(() => {
        const buns = ingredients.filter(ingredient => ingredient.type === 'bun')
        const sauce = ingredients.filter(ingredient => ingredient.type === 'sauce')
        const main = ingredients.filter(ingredient => ingredient.type === 'main')

        return { buns, sauce, main }
    }, [ingredients])

    const bunsRef = React.useRef();
    const sauseRef = React.useRef();
    const mainRef = React.useRef();

    const { buns, sauce, main } = getIngredients;


    return (
        <section className={style.burger_ingredients}>
            <h1 className="text text_type_main-large pt-10 pb-5">Соберите бургер</h1>
            <Tabs refs={{ bunsRef, sauseRef, mainRef }} />
            <ul className={style.burger_ingredients_list}>
                <IngredientsComponentList
                    name={'Булки'}
                    ingredients={buns}
                    ref={bunsRef}
                />
                <IngredientsComponentList
                    name={'Соусы'}
                    ingredients={sauce}
                    ref={sauseRef}
                />
                <IngredientsComponentList
                    name={'Начинки'}
                    ingredients={main}
                    ref={mainRef}
                />
            </ul>
        </section >
    )

}

BurgerIngredients.propTypes = {
    ingredients: PropTypes.arrayOf(ingredientsPropTypes.isRequired).isRequired,
}

export default BurgerIngredients;