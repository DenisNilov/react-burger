import style from './burger-ingredients.module.css';
import IngredienrsComponentCard from './burger-ingredients-component-card.jsx';

const IngredienrsComponentList = () => {
    return (
        <ul className={`${style.burger_ingredients_component_list} mt-6 mb-10`}>
            <li>
                <IngredienrsComponentCard />
            </li>
        </ul>
    )

}

export default IngredienrsComponentList;
