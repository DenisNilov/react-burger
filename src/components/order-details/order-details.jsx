import React from "react";
import style from './order-details.module.css';
import Done from '../../images/done.svg';
import PropTypes from 'prop-types';

const OrderDetails = ({ orderNumber, isLoading }) => {

    return (
        <div className={style.box}>
            {isLoading && <div className={style.loader} id="loader"></div>}
            <p className={`text text_type_digits-large ${style.number}`}>
                {!isLoading && orderNumber.data && orderNumber.data.order.number}
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

OrderDetails.propTypes = {
    orderNumber: PropTypes.number.isRequired,
    isLoading: PropTypes.bool.isRequired,
}

export default OrderDetails;