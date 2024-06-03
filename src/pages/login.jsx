import Header from '../components/app-header/app-header.jsx';
import style from './page.module.css';

export const LoginPage = () => {
    return (
        <>
            <Header />
            <div className={style.wrapper}>
                <div className={style.container}>
                    <h1 className={style.heading}>Вход</h1>
                    <form className={style.form}>
                    </form>
                </div>
            </div>
        </>
    )
}