import style from './burger-ingredients.module.css';
import Tabs from '../burger-ingredienrs-tabs/burger-ingredienrs-tabs.jsx';
import IngredienrsComponent from '../burger-ingredients-component/burger-ingredients-component.jsx';

const BurgerIngredients = () => {
    return (
        <section className={style.burger_ingredients}>
            <h1 className='text text_type_main-large pb-5 pt-10'>Соберите бургер</h1>
            <Tabs />
            <ul className={`${style.burger_ingredients_list}`}>
                <li>
                    <IngredienrsComponent name={'Булки'} />
                </li>
            </ul>
        </section >
    )



}

export default BurgerIngredients;