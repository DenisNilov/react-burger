import React from "react";
import style from './constructor-ingredient.module.css';
import { ingredientsPropTypes } from '../../utils/constants.js'
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";

const ConstructorIngredient = ({ data }) => {
    const { name, price, image } = data;

    return (
        <li
            className={style.ingredient}
        >
            <DragIcon type="primary" />
            <ConstructorElement
                text={name}
                price={price}
                thumbnail={image}
            />
        </li>
    )
}

ConstructorIngredient.propTypes = {
    data: ingredientsPropTypes.isRequired,
}


export default ConstructorIngredient;