import React from 'react';
import Header from '../app-header/app-header.jsx';
import BurgerConstructor from '../burger-constructor/burger-constructor.jsx';
import BurgerIngredients from '../burger-ingredients/burger-ingredients.jsx';
import style from './app.module.css';
import { URL } from '../../utils/constants.js';



function App() {

  const [ingredients, setIngredients] = React.useState([]);

  React.useEffect(() => {
    const api = async () => {
      return await fetch(URL)
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          return Promise.reject(`Ошибка ${res.status}`);
        })
        .then((data) => setIngredients(data.data))
        .catch((error) => console.log(error));
    }
    api();
  }, []);


  return (<>
    <Header />
    <main className={style.main}>
      <BurgerIngredients ingredients={ingredients} />
      <BurgerConstructor ingredients={ingredients} />
    </main>
  </>

  );
}

export default App;
