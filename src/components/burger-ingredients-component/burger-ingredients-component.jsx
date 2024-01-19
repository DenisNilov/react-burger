import style from './burger-ingredients-component.module.css';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import IngredientDetails from '../ingredient-details/ingredient-details.jsx';
import Modal from "../modal/modal.jsx";
import React from "react";
import { ingredientsPropTypes } from '../../utils/constants.js'

const IngredienrsComponent = ({ data }) => {

    const { image, price, name, image_large, calories, carbohydrates, fat, proteins } = data;

    const [openModal, setOpenModal] = React.useState(false);

    const showModal = () => {
        setOpenModal(true);
    };

    const handleClose = () => {
        setOpenModal(false);
    };

    return (
        <li
            className={style.element}
            onClick={showModal}
        >
            <Counter count={1} size="default" extraClass="m-1" />
            <img className={style.image} src={image} alt={name}>
            </img>
            <div className={style.price}>
                <p className="text text_type_digits-default mt-1 mb-1">{price}</p>
                <CurrencyIcon type="primary" />
            </div>
            <p className={`text text_type_main-default pb-8 ${style.title}`}>
                {name}
            </p>
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

IngredienrsComponent.propTypes = {
    data: ingredientsPropTypes.isRequired,
}

export default IngredienrsComponent;
