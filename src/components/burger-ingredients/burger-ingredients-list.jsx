import Tabs from './burger-ingredienrs-tabs.jsx';
import IngredienrsItem from './burger-ingredients-item.jsx';
import style from './burger-ingredients.module.css';

const IngredienrsList = () => {
    return (<ul className={style.burger_ingredients_bread}>
        <h2 className='text text_type_main-medium'>Булки</h2>
        <li className={`pl-4 pr-4 ${style.burger_ingredients_item}`}>
            <IngredienrsItem />
        </li>
    </ul>)
}

export default IngredienrsList;