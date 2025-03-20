import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import style from './app-header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className={style.header}>
            <div className={style.header_inner}>
                <nav className={style.nav}>
                    <Link
                        to='/'
                        className={style.heder_link}>
                        <div className={style.burgerIcon_inner}>
                            <BurgerIcon type="primary" />
                            <p className={`${style.header_item_name} text_type_main-default p-2`}>Конструктор</p>
                        </div>
                    </Link>
                    <a href="https://practicum.yandex.ru"
                        className={style.heder_link}>
                        <div className={style.listIcon_inner}>
                            <ListIcon type="primary" />
                            <p className={`${style.header_item_name} text_type_main-default p-2`}>Лента заказов</p>
                        </div>
                    </a>
                </nav>
                <Link
                    to='/'
                    className={style.heder_link}>
                    <div
                        className={style.logo}>
                        <Logo />
                    </div>
                </Link>



                <Link
                    to='/profile'
                    className={style.heder_link}>
                    <div className={style.listIcon_inner}>
                        <ProfileIcon type="primary" />
                        <p className={`${style.header_item_name} text_type_main-default p-2`}>Личный кабинет</p>
                    </div>
                </Link>
            </div >
        </header >
    )



}

export default Header;