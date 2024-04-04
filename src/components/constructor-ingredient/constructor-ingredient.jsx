import React from "react";
import style from './constructor-ingredient.module.css';
import { ingredientsPropTypes } from '../../utils/constants.js'
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { deleteIngConstructor, sortIngConstructor } from '../../services/actions/constructor-actions.jsx';
import { useDispatch } from "react-redux";
import { useDrag, useDrop } from 'react-dnd';

const ConstructorIngredient = ({ data, index }) => {
    const dispatch = useDispatch();
    const ref = React.useRef(null);
    const { name, price, image, id } = data;

    const [{ handlerId }, drop] = useDrop({
        accept: "sort_ingredient",
        collect: (monitor) => ({
            handlerId: monitor.getHandlerId(),
        }),

        hover: (ingredient, monitor) => {
            if (!ref.current) {
                return;
            }
            const dragIndex = ingredient.index;
            const hoverIndex = index;

            if (dragIndex === hoverIndex) {
                return;
            }

            const hoverBoundingRect = ref.current?.getBoundingClientRect();
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
            const clientOffset = monitor.getClientOffset();
            const hoverClientY = clientOffset.y - hoverBoundingRect.top;

            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            }
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return;
            }
            dispatch(sortIngConstructor(dragIndex, hoverIndex));

            ingredient.index = hoverIndex;
        },
    });

    const [{ isDragging }, drag] = useDrag({
        type: "sort_ingredient",
        item: () => ({ data, index })
    });

    if (data.type !== "bun") drag(drop(ref));
    const opacity = isDragging ? 0 : 1;


    return (
        <li
            className={style.ingredient}
            onDrop={(e) => e.preventDefault()}
            style={{ opacity }}
            ref={ref}
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