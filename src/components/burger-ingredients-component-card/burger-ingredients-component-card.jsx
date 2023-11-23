import style from './burger-ingredients-component-card.module.css';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';

const IngredienrsComponentCard = () => {
    return (
        <li className={style.burger_ingredients_component__card}>
            <Counter count={1} size="default" extraClass="m-1" />
            <img alt='' className='' src='https://cs5.pikabu.ru/post_img/2014/09/18/8/1411040079_1214254849.jpg' width='100' height='100' ></img>
            <div>
                <p className="text text_type_digits-default">22</p>
                <CurrencyIcon type="primary" />
            </div>
            <h3>Краторная булка</h3>
        </li>
    )
}

export default IngredienrsComponentCard;