import IngredienrsComponent from '../burger-ingredients-component/burger-ingredients-component.jsx';
import style from './burger-ingredients-component-list.module.css';

const IngredienrsComponentList = ({ name, data }) => {
    return (
        <li>
            <h2 className="text_type_main-medium mt-10">{name}</h2>
            <ul className={style.ingredienrs_component_list}>
                {data.map(ingredient => <IngredienrsComponent
                    data={ingredient}
                    key={ingredient.id}
                />)}
            </ul>
        </li>)
}

export default IngredienrsComponentList;