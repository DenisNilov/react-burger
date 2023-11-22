import style from './burger-ingredients.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const IngredienrsComponentCard = () => {
    return (
        <div className={style.burger_ingredients_component__card}>
            <img alt='' className='' src='https://cs5.pikabu.ru/post_img/2014/09/18/8/1411040079_1214254849.jpg' width='100' height='100' ></img>
            <div>
                20
                <CurrencyIcon type="primary" />
            </div>
            <h3>Краторная булка</h3>
        </div>
    )
}

export default IngredienrsComponentCard;