import style from './page.module.css';
import { FC } from 'react';
import OrderFeedComponent from '../components/order-feed/order-feed';
import OrderBoardComponent from '../components/order-board/order-board';

export const FeedPage: FC = () => {
    


    return (
        <div className={`${style.profile__container} mt-20`}>
            <OrderFeedComponent />
            <OrderBoardComponent />
        </div>
    )
}
