import { FC } from 'react';
import styles from './order-history.module.css';
import OrderCard from '../order-card/order-card';
import { orders } from '../../utils/constants';
import { useSelector } from '../../services/hooks';


const OrderHistory: FC = () => {

    const { ingredients } = useSelector((state) => state.ingredients);

    return (
        <>
            {orders.length !== 0 ?
                <div className={`${styles.container} pr-4`}>
                    {orders.map(order =>
                        <OrderCard
                            elementPosition={"/profile/orders"}
                            order={order}
                            key={order._id}
                            ingrs={ingredients}
                        />)}
                </div>
                :
                <p className={`text text_color_primary text_type_main-medium`}>Заказов пока нет</p>}
        </>
    )
}

export default OrderHistory;