import style from './burger-ingredients-component.module.css';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import IngredientDetails from '../ingredient-details/ingredient-details.jsx';
import Modal from "../modal/modal.jsx";
import React from "react";
import { ingredientsPropTypes } from '../../utils/constants.js';
import { useDrag } from 'react-dnd';
import { addIngredientDetails } from '../../services/actions/ingredient-details-actions.jsx';
import { useDispatch } from "react-redux";

const IngredientsComponent = ({ ingredient }) => {

    const { image, price, name } = ingredient;
    const dispatch = useDispatch();
    const [openModal, setOpenModal] = React.useState(false);

    const showModal = () => {
        setOpenModal(true);
        dispatch(addIngredientDetails(ingredient))
    };

    const handleClose = () => {
        setOpenModal(false);
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
                <Modal onClose={handleClose} isOpen={openModal}>
                    <IngredientDetails />
                </Modal>
            }
        </li>
    )
}

IngredientsComponent.propTypes = {
    ingredient: ingredientsPropTypes.isRequired,
}

export default IngredientsComponent;
