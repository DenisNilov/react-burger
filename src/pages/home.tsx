import React, { FC } from 'react';
import BurgerConstructor from '../components/burger-constructor/burger-constructor';
import BurgerIngredients from '../components/burger-ingredients/burger-ingredients';
import style from './home.module.css';
import { useDispatch } from '../services/hooks';
import { getIngredientsAction } from '../services/actions/ingredients-actions';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Outlet } from 'react-router-dom';


export const HomePage: FC = () => {

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
            <Outlet />
        </>
    );
}

