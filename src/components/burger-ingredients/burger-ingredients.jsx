import style from './burger-ingredients.module.css';
import Tabs from '../burger-ingredienrs-tabs/burger-ingredienrs-tabs.jsx';
import IngredienrsComponent from '../burger-ingredients-component/burger-ingredients-component.jsx';

const BurgerIngredients = ({ ingredients }) => {

    const buns = ingredients.filter(ingredient => ingredient.type === 'bun')
    const sauce = ingredients.filter(ingredient => ingredient.type === 'sauce')
    const fillings = ingredients.filter(ingredient => ingredient.type === 'main')


    return (
        <section className={style.burger_ingredients}>
            <h1 className="text text_type_main-large pt-10 pb-5">Соберите бургер</h1>
            <Tabs />
            <ul className={style.burger_ingredients_list}>
                <IngredienrsComponent
                    name={'Булки'}
                    data={buns}
                    key={1}
                />
                <IngredienrsComponent
                    name={'Соусы'}
                    data={sauce}
                    key={2}
                />
                <IngredienrsComponent
                    name={'Начинки'}
                    data={fillings}
                    key={3}
                />
            </ul>
        </section >
    )

}

export default BurgerIngredients;