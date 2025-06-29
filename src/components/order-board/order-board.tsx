import React, { FC, useMemo } from 'react';
import styles from './order-board.module.css';
import { wsocketFeed } from "../../utils/constants";

interface IOrderNumberListProps {
    doneList: number[],
    workList: number[]
}

interface IOrdersStatisticsProps {
    title: string,
    number: number
}

const OrdersInfo: FC<IOrderNumberListProps> = ({ doneList, workList }) => {
    return (
        <div className={`${styles.wrapper}`}>
            <div className={`${styles.containerList} mr-9`}>
                <p className={"text text_type_main-medium text_color_primary mb-6"}>
                    Готовы:
                </p>
                <ul className={styles.listNumer}>
                    {doneList.map((item) => {
                        return (
                            <li
                                key={item}
                                className={`text text_type_digits-default text_color_success`}
                            >
                                {item}
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className={styles.containerList}>
                <p className={"text text_type_main-medium text_color_primary mb-6"}>
                    В работе:
                </p>
                <ul className={styles.listNumer}>
                    {workList.map((item) => {
                        return (
                            <li
                                key={item}
                                className={`text text_type_digits-default `}
                            >
                                {item}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};


const OrdersStatistics: FC<IOrdersStatisticsProps> = ({ title, number }) => {
    return (
        <div>
            <p className={`text text_type_main-medium text_color_primary`}>
                {title}
            </p>
            <p className={`text text_type_digits-large text_color_primary ${styles.shadow}`} >
                {number}
            </p>
        </div>
    );
};


const OrderBoardComponent: FC = () => {

    const { orders, total, totalToday, } = JSON.parse(wsocketFeed)//useSelector((store) => store.wsocketFeed);



    const { doneList, workList } = useMemo(() => {
        if (!orders.length) {
            return { doneList: [], workList: [] };
        }
        return orders.reduce((count: any, item: any) => {
            switch (item.status) {
                case "done":
                    count.doneList.push(item.number);
                    break;
                case "created":
                    count.workList.push(item.number);
                    break;
            }
            return count;
        },
            { doneList: [], workList: [] }
        );
    }, [orders]);


    return (
        <div className={`${styles.ordersInfo} ml-15 pr-4`}>
            <OrdersInfo doneList={doneList} workList={workList} />
            <OrdersStatistics title={"Выполнено за все время:"} number={total} />
            <OrdersStatistics title={"Выполнено за сегодня:"} number={totalToday} />
        </div>
    )
}

export default OrderBoardComponent;
