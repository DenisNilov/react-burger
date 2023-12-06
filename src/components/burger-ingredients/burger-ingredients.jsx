import style from './burger-ingredients.module.css';
import Tabs from '../burger-ingredienrs-tabs/burger-ingredienrs-tabs.jsx';
import IngredienrsComponentList from '../burger-ingredients-component-list/burger-ingredients-component-list.jsx';
import PropTypes from 'prop-types';
import { ingredientsPropTypes } from '../../utils/constants.js'


const BurgerIngredients = ({ ingredients }) => {

    const buns = ingredients.filter(ingredient => ingredient.type === 'bun')
    const sauce = ingredients.filter(ingredient => ingredient.type === 'sauce')
    const main = ingredients.filter(ingredient => ingredient.type === 'main')


    return (
        <section className={style.burger_ingredients}>
            <h1 className="text text_type_main-large pt-10 pb-5">Соберите бургер</h1>
            <Tabs />
            <ul className={style.burger_ingredients_list}>
                <IngredienrsComponentList
                    name={'Булки'}
                    data={buns}
                />
                <IngredienrsComponentList
                    name={'Соусы'}
                    data={sauce}
                />
                <IngredienrsComponentList
                    name={'Начинки'}
                    data={main}
                />
            </ul>
        </section >
    )

}

BurgerIngredients.propTypes = {
    ingredients: PropTypes.arrayOf(ingredientsPropTypes).isRequired,
}

export default BurgerIngredients;