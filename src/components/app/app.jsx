import React from 'react';
import Header from '../app-header/app-header.jsx';
import BurgerConstructor from '../burger-constructor/burger-constructor.jsx';
import BurgerIngredients from '../burger-ingredients/burger-ingredients.jsx';
import style from './app.module.css';
import { useDispatch } from "react-redux";
import { getIngredientsAction } from '../../services/actions/ingredients-actions.jsx';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";


function App() {

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getIngredientsAction());
  }, [dispatch]);


  return (
    <>
      <Header />
      <DndProvider backend={HTML5Backend}>
        <main className={style.main}>
          <BurgerIngredients />
          <BurgerConstructor />
        </main>
      </DndProvider>


    </>


  );
}

export default App;