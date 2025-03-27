import React, { FC } from "react";
import style from './constructor-ingredient.module.css';
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { deleteIngConstructor, sortIngConstructor } from '../../services/actions/constructor-actions';
import { useDispatch } from "react-redux";
import { useDrag, useDrop } from 'react-dnd';
import { AppDispatch, } from "../../services/types";
import { IIngredient } from '../../services/types/data';

interface PropsConstructorIngredient {
    data: IIngredient,
    index: number
}

const ConstructorIngredient: FC<PropsConstructorIngredient> = ({ data, index }) => {
    const dispatch: AppDispatch = useDispatch();
    const ref = React.useRef<HTMLLIElement>(null);
    const { name, price, image, id } = data;

    const [, drop] = useDrop({
        accept: "sort_ingredient",
        collect: (monitor) => ({
            handlerId: monitor.getHandlerId(),
        }),

        hover: (ingredient: any, monitor) => {
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
            if (!clientOffset) return;

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

    interface DragObject {
        data: IIngredient;
        index: number;
    }

    const [{ isDragging }, drag] = useDrag<DragObject, unknown, { isDragging: boolean }>({
        type: "sort_ingredient",
        item: () => ({ data, index }), // This should match the DragObject structure
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
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

export default ConstructorIngredient;