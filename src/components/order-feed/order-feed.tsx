import React, { FC } from 'react';
import styles from './order-feed.module.css';
import OrderCard from '../order-card/order-card';

const OrderFeedComponent: FC = () => {
    return (
        <section className={styles.container}>
            <h1 className={`text text_color_primary text_type_main-medium`}>Лента заказов</h1>
            <ul className={styles.list}>
                
            </ul>
        </section>
    )
}

export default OrderFeedComponent;