import style from './order-details.module.css';
import Done from '../../images/done.svg';

const OrderDetails = () => {

    return (
        <div className={style.box}>
            <p className={`text text_type_digits-large ${style.number}`}>
                034536
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