import React, { FC } from 'react';
import styles from './order-feed.module.css';
import OrderCard from '../order-card/order-card';
import { orders } from '../../utils/constants';



const OrderFeedComponent: FC = () => {
    return (
        <section className={styles.container}>
            <h2 className={`text text_type_main-large text_color_primary mt-10 mb-5`}>Лента заказов</h2>
            <ul className={`${styles.items} pr-4`}>
                {orders.map(order => <OrderCard elementPosition='feed' order={order} key={order.number} />)}
            </ul>
        </section>
    )
}

export default OrderFeedComponent;