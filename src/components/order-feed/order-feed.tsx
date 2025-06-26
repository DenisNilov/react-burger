import React, { FC } from 'react';
import styles from './order-feed.module.css';
import OrderCard from '../order-card/order-card';


const orders = [{
    createdAt: "2025-06-26T16:57:38.801Z",
    updatedAt: "2025-06-26T16:57:39.561Z",
    ingredients: ["643d69a5c3f7b9001cfa093d", "643d69a5c3f7b9001cfa0943"],
    name: "Space флюоресцентный бургер",
    number: 82732,
    status: "done" as const,
    _id: '82732',
    price: 1068,
}, {
    createdAt: "2025-06-26T16:57:38.801Z",
    updatedAt: "2025-06-26T16:57:39.561Z",
    ingredients: ["643d69a5c3f7b9001cfa093d", "643d69a5c3f7b9001cfa0943"],
    name: "Space флюоресцентный бургер",
    number: 82732,
    status: "done" as const,
    _id: '82732',
    price: 1068,
}]



const OrderFeedComponent: FC = () => {
    return (
        <section className={styles.container}>
            <h2 className={`text text_type_main-large text_color_primary mt-10 mb-5`}>Лента заказов</h2>
            <ul className={`${styles.items} pr-4`}>
                {orders.map(order => <OrderCard elementPosition='feed' order={order} />)}
            </ul>
        </section>
    )
}

export default OrderFeedComponent;