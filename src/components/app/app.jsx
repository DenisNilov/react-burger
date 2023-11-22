import React from 'react';
import Header from '../app-header/app-header.jsx';
import BurgerConstructor from '../burger-constructor/burger-constructor.jsx';
import BurgerIngredients from '../burger-ingredients/burger-ingredients.jsx';
import style from './app.module.css';

function App() {
  return (<>
    <Header />
    <main>
      <div className={style.page_main__inner}>
        <BurgerIngredients />
        <BurgerConstructor />
      </div>
    </main>
  </>

  );
}

export default App;
