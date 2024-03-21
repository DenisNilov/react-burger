import React from 'react';
import style from './burger-ingredients.module.css';
import Tabs from '../burger-ingredienrs-tabs/burger-ingredienrs-tabs.jsx';
import IngredientsComponentList from '../burger-ingredients-component-list/burger-ingredients-component-list.jsx';
import { useSelector } from "react-redux";
import { useInView } from "react-intersection-observer";


const BurgerIngredients = () => {

    const { ingredients } = useSelector(state => state.ingredients);
    const burgerConstructor = useSelector(state => state.burgerConstructor);

    const ingredientsCounters = React.useMemo(() => {
        const { bun, ingredients } = burgerConstructor;
        const counters = {};
        if (ingredients) {
            ingredients.forEach(ingredient => {
                if (!counters[ingredient._id]) {
                    counters[ingredient._id] = 0;
                }
                counters[ingredient._id]++;
            });
        }
        if (bun) {
            counters[bun._id] = 2;
        }
        return counters;
    }, [burgerConstructor])



    const getIngredients = React.useMemo(() => {
        const buns = ingredients.filter(ingredient => ingredient.type === 'bun')
        const sauce = ingredients.filter(ingredient => ingredient.type === 'sauce')
        const main = ingredients.filter(ingredient => ingredient.type === 'main')

        return { buns, sauce, main }
    }, [ingredients])

    const { buns, sauce, main } = getIngredients;

    const [bunsRef, inViewBun] = useInView({
        threshold: 0,
    });
    const [sauseRef, inViewSause] = useInView({
        threshold: 0,
    });
    const [mainRef, inViewMain] = useInView({
        threshold: 0,
    });


    return (
        <section className={style.burger_ingredients}>
            <h1 className="text text_type_main-large pt-10 pb-5">Соберите бургер</h1>
            <Tabs inView={{ inViewBun, inViewSause, inViewMain }} />
            <ul className={style.burger_ingredients_list}>
                <IngredientsComponentList
                    name={'Булки'}
                    ingredients={buns}
                    count={ingredientsCounters}
                    ref={bunsRef}
                />
                <IngredientsComponentList
                    name={'Соусы'}
                    ingredients={sauce}
                    count={ingredientsCounters}
                    ref={sauseRef}
                />
                <IngredientsComponentList
                    name={'Начинки'}
                    ingredients={main}
                    count={ingredientsCounters}
                    ref={mainRef}
                />
            </ul>
        </section >
    )
}


export default BurgerIngredients;