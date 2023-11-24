import style from './burger-ingredients-component-list.module.css';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const IngredienrsComponentList = () => {
    return (
        <li className={style.element}>
            <Counter count={1} size="default" extraClass="m-1" />
            <img className={style.image} src='https://cs5.pikabu.ru/post_img/2014/09/18/8/1411040079_1214254849.jpg'
                alt=''>
            </img>
            <div className={style.price}>
                <p className="text text_type_digits-default mt-1 mb-1">231</p>
                <CurrencyIcon type="primary" />
            </div>
            <p className={`text text_type_main-default pb-8 ${style.title}`}>
                484ki
            </p>
        </li>
    )

}

export default IngredienrsComponentList;
