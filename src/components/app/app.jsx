import React from 'react';
import Header from '../app-header/app-header.jsx';
import BurgerConstructor from '../burger-constructor/burger-constructor.jsx';
import BurgerIngredients from '../burger-ingredients/burger-ingredients.jsx';
import style from './app.module.css';
import { request } from '../../utils/utils.js';
import { BurgerIngredientsContext } from '../../services/appContext.js';


function App() {

  const [ingredients, setIngredients] = React.useState([]);

  React.useEffect(() => {
    const api = async () => {
      return await request(`ingredients`)
        .then((data) => setIngredients(data.data))
        .catch(console.error);
    }
    api();
  }, []);


  return (
    <BurgerIngredientsContext.Provider value={ingredients}>
      <Header />
      <main className={style.main}>
        <BurgerIngredients />
        <BurgerConstructor />
      </main>
    </BurgerIngredientsContext.Provider>
  );
}

export default App;