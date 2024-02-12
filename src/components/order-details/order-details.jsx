import React from "react";
import style from './order-details.module.css';
import Done from '../../images/done.svg';
import { BurgerIngredientsContext } from '../../services/appContext.js';
import { request } from '../../utils/utils.js';

const OrderDetails = () => {

    const ingredients = React.useContext(BurgerIngredientsContext);

    const [numberOrder, setnumberOrder] = React.useState({
        isLoading: false,
        number: ''
    });

    const idIngredients = ingredients.map(ingredient => ingredient._id);

    React.useEffect(() => {
        const api = async () => {
            setnumberOrder({ ...numberOrder, isLoading: true });
            return await request(`orders`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({
                    "ingredients": idIngredients
                })
            }).then(data => setnumberOrder({ ...numberOrder, number: data.order.number }))
                .catch(console.error);
        }
        api();
    }, []);

    return (
        <div className={style.box}>
            <p className={`text text_type_digits-large ${style.number}`}>
                {numberOrder.isLoading && 'Загрузка...'}
                {numberOrder.number}
            </p>
            <p className="text text_type_main-medium mt-8">идентификатор заказа</p>
            <div className={style.done}>
                <img src={Done} alt='done' ></img>
            </div>
            <p className="text text_type_main-default mt-15">
                Ваш заказ начали готовить
            </p>
            <p className="text text_type_main-default text_color_inactive mt-2">
                Дождитесь готовности на орбитальной станции
            </p>
        </div>
    );
}

export default OrderDetails;