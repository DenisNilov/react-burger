import React from "react";
import style from './constructor-ingredient.module.css';
import IngredientDetails from '../Ingredient-details/Ingredient-details.jsx';
import Modal from "../modal/modal.jsx";
import { ingredientsPropTypes } from '../../utils/constants.js'
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";

const ConstructorIngredient = ({ data }) => {
    const { name, price, image, image_large, calories, carbohydrates, fat, proteins } = data;

    const [openModal, setOpenModal] = React.useState(false);

    const showModal = () => {
        setOpenModal(true);
    };

    const handleClose = () => {
        setOpenModal(false);
    };

    return (
        <li
            className={style.ingredient}
            onClick={showModal}
        >
            <DragIcon type="primary" />
            <ConstructorElement
                text={name}
                price={price}
                thumbnail={image}
            />
            {openModal &&
                <Modal onClose={handleClose}>
                    <IngredientDetails
                        image={image_large}
                        name={name}
                        calories={calories}
                        carbohydrates={carbohydrates}
                        fat={fat}
                        proteins={proteins}
                    />
                </Modal>
            }
        </li>
    )
}

ConstructorIngredient.propTypes = {
    data: ingredientsPropTypes.isRequired,
}


export default ConstructorIngredient;