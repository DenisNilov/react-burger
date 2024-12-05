import style from './burger-ingredients-component.module.css';
import PropTypes from 'prop-types';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React from "react";
import { ingredientsPropTypes } from '../../utils/constants.js';
import { useDrag } from 'react-dnd';
import { addIngredientDetails } from '../../services/actions/ingredient-details-actions.jsx';
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { setIngredient } from "../../utils/utils.js";
import { getIngredient, getToken } from "../../utils/utils.js";

const IngredientsComponent = ({ ingredient, count }) => {

    const { image, price, name, _id } = ingredient;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    React.useEffect(() => {
        setIngredient(ingredient)
    }, [ingredient])

    const showModal = () => {
        navigate(`/ingredients/${_id}`)
        dispatch(addIngredientDetails(getIngredient()));
        console.log(getIngredient())
    };


    const [{ opacity }, ref] = useDrag({
        type: "ingredient",
        item: ingredient,
        collect: (monitor) => ({
            opacity: monitor.isDragging() ? 0.5 : 1
        }),
    });


    return (
        <li
            className={style.element}
            onClick={showModal}
            ref={ref}
            style={{ opacity }}
        >
            <Counter count={count} size="default" extraClass="m-1" />
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

IngredientsComponent.propTypes = {
    ingredient: ingredientsPropTypes.isRequired,
    count: PropTypes.number
}

export default IngredientsComponent;
