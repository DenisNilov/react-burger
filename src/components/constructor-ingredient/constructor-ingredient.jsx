import React from "react";
import style from './constructor-ingredient.module.css';
import { ingredientsPropTypes } from '../../utils/constants.js'
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { deleteIngConstructor } from '../../services/actions/constructor-actions.jsx';
import { useDispatch } from "react-redux";

const ConstructorIngredient = ({ data }) => {
    const dispatch = useDispatch();
    const { name, price, image, id } = data;


    return (
        <li
            className={style.ingredient}
        >
            <DragIcon type="primary" />
            <ConstructorElement
                text={name}
                price={price}
                thumbnail={image}
                handleClose={() => dispatch(deleteIngConstructor(id))}
            />
        </li>
    )
}

ConstructorIngredient.propTypes = {
    data: ingredientsPropTypes.isRequired,
}


export default ConstructorIngredient;