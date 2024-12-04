import React from 'react';
import BurgerConstructor from '../components/burger-constructor/burger-constructor.jsx';
import BurgerIngredients from '../components/burger-ingredients/burger-ingredients.jsx';
import style from './home.module.css';
import { useDispatch } from "react-redux";
import { getIngredientsAction } from '../services/actions/ingredients-actions.jsx';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";


export const HomePage = () => {

    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(getIngredientsAction());
    }, [dispatch]);


    return (
        <>
            <DndProvider backend={HTML5Backend}>
                <main className={style.main}>
                    <BurgerIngredients />
                    <BurgerConstructor />
                </main>
            </DndProvider>
        </>


    );
}

