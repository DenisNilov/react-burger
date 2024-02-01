import React from "react";
import style from './order-details.module.css';
import Done from '../../images/done.svg';
import { BurgerIngredientsContext } from '../../services/appContext.js';
import { makeResponseCheck } from '../../utils/utils.js';

const OrderDetails = () => {

    const ingredients = React.useContext(BurgerIngredientsContext);

    const [numberOrder, setnumberOrder] = React.useState(0);

    const idIngredients = ingredients.map(ingredient => ingredient._id);

    React.useEffect(() => {
        const api = async () => {
            return await fetch('https://norma.nomoreparties.space/api/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({
                    "ingredients": idIngredients
                })
            }).then((res) => makeResponseCheck(res))
                .then(data => setnumberOrder(data.order.number))
                .catch((error) => console.log(error));
        }
        api();
    }, []);

    return (
        <div className={style.box}>
            <p className={`text text_type_digits-large ${style.number}`}>
                {numberOrder}
            </p>
            <p className="text text_type_main-medium mt-8">идентификатор заказа</p>
            <div className={style.done}>
                <img src={Done} alt='' ></img>
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