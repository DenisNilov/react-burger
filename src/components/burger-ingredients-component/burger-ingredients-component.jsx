import style from './burger-ingredients-component.module.css';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const IngredienrsComponent = ({ data }) => {
    const { image, price, name, } = data;

    return (
        <li className={style.element}>
            <Counter count={1} size="default" extraClass="m-1" />
            <img className={style.image} src={image} alt={name}>
            </img>
            <div className={style.price}>
                <p className="text text_type_digits-default mt-1 mb-1">{price}</p>
                <CurrencyIcon type="primary" />
            </div>
            <p className={`text text_type_main-default pb-8 ${style.title}`}>
                {name}
            </p>
        </li>
    )

}

export default IngredienrsComponent;
