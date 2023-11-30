import IngredienrsComponentList from '../burger-ingredients-component-list/burger-ingredients-component-list.jsx';
import style from './burger-ingredients-component.module.css';

const IngredienrsComponent = ({ name, data }) => {
    return (
        <li>
            <h2 className="text_type_main-medium mt-10">{name}</h2>
            <ul className={style.ingredienrs_component_list}>
                {data.map(ingredient => <IngredienrsComponentList
                    data={ingredient}
                    key={ingredient.id}
                />)}
            </ul>
        </li>)
}

export default IngredienrsComponent;