import style from './burger-ingredients-component.module.css';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDrag } from 'react-dnd';
import { addIngredientDetails } from '../../services/actions/ingredient-details-actions';
import { useDispatch } from '../../services/hooks';
import { setIngredientId } from '../../utils/utils';
import { FC } from 'react';
import { IIngredient } from '../../services/types/data';
import { useNavigate, useLocation } from 'react-router-dom'

interface IIngredientsComponentProps {
    ingredient: IIngredient;
    count: number;
}

const IngredientsComponent: FC<IIngredientsComponentProps> = ({ ingredient, count }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const { image, price, name, _id } = ingredient;
    const dispatch = useDispatch();

    const [{ opacity }, ref] = useDrag({
        type: "ingredient",
        item: ingredient,
        collect: (monitor) => ({
            opacity: monitor.isDragging() ? 0.5 : 1
        }),
    });

    const openDetails = () => {
        setIngredientId(ingredient);
        dispatch(addIngredientDetails(ingredient))
        const shouldOpenModal = location.pathname === '/';
        navigate(`/ingredients/${_id}`, {
            state: shouldOpenModal ? { background: location } : null
        });
    }



    return (
        <li
            className={style.element}
            ref={ref}
            style={{ opacity }}
        >
            <div
                onClick={openDetails}
                className={style.link}
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
            </div>
        </li>
    )
}

export default IngredientsComponent;
