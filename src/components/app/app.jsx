import React from 'react';
import Header from '../app-header/app-header.jsx';
import BurgerConstructor from '../burger-constructor/burger-constructor.jsx';
import BurgerIngredients from '../burger-ingredients/burger-ingredients.jsx';
import './app.css';

function App() {
  return (<>
    <Header />
    <main className="page_main">
      <BurgerIngredients />
      <BurgerConstructor />
    </main>
  </>

  );
}

export default App;
