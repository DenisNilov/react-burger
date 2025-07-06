import styles from "./order-card.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
import { getDate } from '../../utils/data';
import { getStatus } from '../../utils/status';
import { IOrderInfo } from '../../services/types/data';
import { FC, useMemo } from 'react';
import { useIngredientsData } from "../../hooks/useIngredientsData";
import { IIngredient } from '../../services/types/data';

interface IOrderCardsProps {
    elementPosition: string;
    order: IOrderInfo;
    ingrs: Array<IIngredient>;
}


const OrderCard: FC<IOrderCardsProps> = ({ elementPosition, order, ingrs }) => {

    const ingredients = useIngredientsData(ingrs);


    const price = useMemo(
        () => order.ingredients.reduce((acc, ingredientId) =>
            ingredientId ? acc + ingredients.getIngredientPrice(ingredientId) : acc, 0),
        [ingredients, order])

    return (
        <Link
            className={`text_color_primary ${styles.link}`}
            to={elementPosition === "feed" ?
                `/feed/${order._id}`
                : elementPosition === "/profile/orders"
                    ?
                    `/profile/orders/${order._id}`
                    :
                    '*'}
            state={{ from: elementPosition, order: order }}
        >
            <div className={styles.header}>
                <p className={`text text_type_digits-default`}>#{order.number}</p>
                <p className={`text text_type_main-default text_color_inactive`}>{getDate(order.createdAt)}</p>
            </div>
            <p className={`text text_type_main-medium text_color_primary mt-6`}>{order.name}</p>
            {order.status &&
                elementPosition === "profile" &&
                <p className={order.status === "done" ? "text text_type_main-small mt-2 text_color_success"
                    : order.status === "created" ? "text text_type_main-small mt-2 text_color_primary"
                        : "text text_type_main-small mt-2 text_color_accent"}>
                    {getStatus(order.status)}
                </p>}
            <div className={`mt-6 ${styles.header}`}>
                <div className={styles.ingredientsContainer}>
                    {order.ingredients.slice(0, 6).map((ingredientId, index) =>
                        ingredientId &&
                        <div className={styles.ingredientImageContainer}
                            data-count={`+${order.ingredients.slice(6).length}`}
                            key={`${order._id}-${index}-${ingredientId}`}>
                            <img src={ingredients.getIngredientImage(ingredientId)}
                                className={styles.ingredientImage}
                                alt={"Картинка ингредиента"} />
                        </div>)
                    }
                </div>
                <div className={`text text_type_main-default ${styles.price}`}>
                    <p className={"text text_type_digits-default text_color_primary"}>
                        {price}
                    </p>
                    <CurrencyIcon type="primary" />
                </div>
            </div>
        </Link >);
};

export default OrderCard;