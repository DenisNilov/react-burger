import Modal from '../components/modal/modal';
import React, { FC, useMemo } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import styles from './page.module.css';
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { IIngredient, IOrderInfo } from "../services/types/data";
import { getStatus } from '../utils/status';
import { getDate } from '../utils/data';
import { useIngredientsData } from "../hooks/useIngredientsData";
import { useSelector } from '../services/hooks';




const OrderDetailsItem = ({ ingredient, count }: { ingredient: IIngredient, count: number }) => {
    return (
        <div className={styles.containerItem}>
            <div className={styles.wrapperItem}>
                <div className={styles.imageContainerItem}>
                    <img src={ingredient.image_mobile} alt="Картинка ингредиента" className={styles.imageItem} />
                </div>
                <p className={`${styles.titleItem} text text_type_main-small text_color_primary ml-4`}>{ingredient.name}</p>
            </div>
            <div className={styles.wrapperItem}>
                <p className={'text text_type_digits-default text_color_primary ml-4 mr-2'}>{count} x {ingredient.price}</p>
                <CurrencyIcon type="primary" />
            </div>
        </div>
    );
};


const OrderDetailsInfoModalPage: FC = () => {

    const ingrs = useSelector((state) => state.ingredients.ingredients);
    const [openModal, setOpenModal] = React.useState(true);
    const navigate = useNavigate();
    const location = useLocation();
    const { order }: { order: IOrderInfo } = location.state || {};
    const ingredients = useIngredientsData(ingrs);

    const price = useMemo(
        () =>
            order?.ingredients?.reduce(
                (prev, ingredientId) =>
                    ingredientId ? prev + ingredients.getIngredientPrice(ingredientId) : prev,
                0
            ) || 0,
        [ingredients, order]
    );

    const orderIngredients = useMemo(() => order?.ingredients
        ?.map(ingredientId => ingredients.getIngredientData(ingredientId))
        ?.filter(ingredient => ingredient !== undefined) || [], [ingredients, order?.ingredients]);

    const uniqueIngredients = useMemo(() => {
        const ingredientCounts = new Map<string, { ingredient: IIngredient, count: number }>();

        orderIngredients.forEach(ingredient => {
            if (ingredientCounts.has(ingredient._id)) {
                ingredientCounts.get(ingredient._id)!.count += 1;
            } else {
                ingredientCounts.set(ingredient._id, { ingredient, count: 1 });
            }
        });

        return Array.from(ingredientCounts.values());
    }, [orderIngredients]);


    const handleClose = () => {
        setOpenModal(false);
        navigate(-1);
    };

    return (<Modal onClose={handleClose} isOpen={openModal}>

        {order ?
            (<div>

                <p
                    className={`text text_type_digits-default text_color_primary ${styles.id}`}>
                    {`#${order.number}`}
                </p>

                <p
                    className={`text text_type_main-medium text_color_primary mt-10 ${styles.title}`}
                >{`${order.name}`}
                </p>

                <p
                    className={
                        order.status === "done"
                            ? "text text_type_main-small mt-3 text_color_success"
                            : order.status === "created"
                                ? "text text_type_main-small mt-3 text_color_primary"
                                : "text text_type_main-small mt-3 text_color_accent"
                    }
                >
                    {getStatus(order.status)}
                </p>

                <p
                    className={"text text_type_main-medium text_color_primary mt-15  mb-6 "}
                >
                    Состав:
                </p>
                <div
                    className={`${styles.ingredientsContainer} pr-4`}
                >
                    {uniqueIngredients.map(({ ingredient, count }) =>
                        <OrderDetailsItem
                            key={ingredient._id}
                            ingredient={ingredient}
                            count={count}
                        />)}
                </div>

                <div className={`${styles.infoContainer} mt-10`}>

                    <p className={"text text_type_main-small text_color_inactive"}>
                        {getDate(order.createdAt)}
                    </p>

                    <div className={styles.price}>

                        <p className={"text text_type_digits-default text_color_primary"}>
                            {price}
                        </p>

                        <CurrencyIcon type="primary" />
                    </div>
                </div>

            </div>)
            :
            (<div className={styles.loader} id="loader"></div>)}
    </Modal >)
};

export default OrderDetailsInfoModalPage;