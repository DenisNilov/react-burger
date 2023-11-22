
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components'
import style from './burger-ingredients.module.css';

const IngredienrsItem = () => {
    return (<ul className={style.burger_ingredients_bread}>
        <li className={style.burger_ingredients_bread__item}>
            <img alt='' className='' src='' width='100' height='100' ></img>
            <div>20</div>
            <h3>Краторная улка</h3>

            {/* <Counter count={233} size='small' /> */}
        </li>

    </ul>
    )

}

export default IngredienrsItem;
