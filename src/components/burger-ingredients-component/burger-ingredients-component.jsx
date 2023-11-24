import IngredienrsComponentList from '../burger-ingredients-component-list/burger-ingredients-component-list.jsx';
import style from './burger-ingredients-component.module.css';

const IngredienrsComponent = ({ name }) => {
    return (
        <div>
            <h2 className="text_type_main-medium mt-10">{name}</h2>
            <ul className={style.ingredienrs_component_list}>
                <IngredienrsComponentList />
                <IngredienrsComponentList />
                <IngredienrsComponentList />
            </ul>
        </div>)
}

export default IngredienrsComponent;