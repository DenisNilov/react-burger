import style from './order-details.module.css';
import Done from '../../images/done.svg';
import { FC } from 'react';
import { useSelector } from '../../services/hooks';


const OrderDetails: FC = () => {

    const orderInfo = useSelector(state => state.order);
    const isLoading = orderInfo.orderRequest;

    return (

        <div className={style.box}>
            {isLoading ? (<div className={style.loader} id="loader"></div>)
                : (<>  {
                    orderInfo.data ? <>
                        <p className={`text text_type_digits-large ${style.number}`}>
                            {orderInfo.data && orderInfo.data.order.number}
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
                    </> : (<>
                        <p className="text text_type_main-medium mt-8">
                            {orderInfo.error}
                        </p>
                        <p className="text text_type_main-default text_color_inactive mt-2">
                            Попробуйте позже еще раз
                        </p>
                    </>)
                }
                </>)
            }
        </div>
    );
}

export default OrderDetails;