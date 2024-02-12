import React from "react";
import style from './order-details.module.css';
import Done from '../../images/done.svg';
import { useSelector } from "react-redux";
import { postOrderAction } from '../../services/actions/order-actions.jsx';

const OrderDetails = () => {

    //const dispatch = useDispatch();

    const { ingredients } = useSelector(state => state.ingredients);
    const { numberOrder } = useSelector(state => state.order);

    console.log(numberOrder)


    const idIngredients = ingredients.map(ingredient => ingredient._id);

    React.useEffect(() => {
        postOrderAction(idIngredients)
    }, [idIngredients]);

    return (
        <div className={style.box}>
            <p className={`text text_type_digits-large ${style.number}`}>
                {numberOrder}
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