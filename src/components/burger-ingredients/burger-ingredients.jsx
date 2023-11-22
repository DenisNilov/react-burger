import style from './burger-ingredients.module.css';
import Tabs from './burger-ingredienrs-tabs.jsx';
import IngredienrsList from './burger-ingredients-list.jsx';

const BurgerIngredients = () => {
    return (
        <section className={style.burger_ingredients}>
            <h1 className='text text_type_main-large pb-5 pt-10'>Соберите бургер</h1>
            <Tabs />
            <ul>
                <li>
                    <IngredienrsList />
                </li>
            </ul>
        </section >
    )



}

export default BurgerIngredients;