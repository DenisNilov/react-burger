import { FC } from 'react';
import styles from './authorization-error.module.css';

const AuthorizationError: FC = () => {
    return (
        <div className={styles.box}>
            <div className={styles.title}>
                Вы не авторизованы для оформления заказа
            </div>

        </div>
    )
}

export default AuthorizationError;