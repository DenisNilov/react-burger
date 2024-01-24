import IngredienrsComponent from '../burger-ingredients-component/burger-ingredients-component.jsx';
import style from './burger-ingredients-component-list.module.css';
import { ingredientsPropTypes } from '../../utils/constants.js';
import PropTypes from 'prop-types';

const IngredientsComponentList = ({ name, ingredients }) => {
    return (
        <li>
            <h2 className="text_type_main-medium mt-10">{name}</h2>
            <ul className={style.ingredienrs_component_list}>
                {ingredients.map(ingredient => <IngredienrsComponent
                    ingredient={ingredient}
                    key={ingredient._id}
                />)}
            </ul>
        </li>)
}

IngredientsComponentList.propTypes = {
    ingredients: PropTypes.arrayOf(ingredientsPropTypes.isRequired).isRequired,
    name: PropTypes.string.isRequired
}

export default IngredientsComponentList;