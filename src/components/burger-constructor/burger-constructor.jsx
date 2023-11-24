import style from './burger-constuctor.module.css';
import ConstructorIngredient from '../constructor-ingredient/constructor-ingredient.jsx';
import {
    ConstructorElement,
    CurrencyIcon,
    Button
} from "@ya.praktikum/react-developer-burger-ui-components";

const BurgerConstructor = () => {
    return (
        <section className={style.box}>
            <div className={style.elements}>
                <div className={style.bun}>
                    <ConstructorElement
                        type="top"
                        isLocked={true}
                        text="Краторная булка N-200i (верх)"
                        price={200}
                        thumbnail={'img'}
                    />
                </div>
                <ul className={style.content}>
                    <li className={style.element}>
                        <ConstructorIngredient />
                    </li>
                    <li className={style.element}>
                        <ConstructorIngredient />
                    </li>
                    <li className={style.element}>
                        <ConstructorIngredient />
                    </li>
                    <li className={style.element}>
                        <ConstructorIngredient />
                    </li>
                    <li className={style.element}>
                        <ConstructorIngredient />
                    </li>
                </ul>
                <div className={style.bun}>
                    <ConstructorElement
                        type="bottom"
                        isLocked={true}
                        text="Краторная булка N-200i (низ)"
                        price={200}
                        thumbnail={'img'}
                    />
                </div>
            </div>
            <div className={style.bottom}>
                <div className={style.sum}>
                    <p className="text text_type_digits-medium">454</p>
                    <CurrencyIcon type="primary" />
                </div>
                <Button
                    htmlType="button"
                    type="primary"
                    size="large"
                    disabled={false}>
                    Оформить заказ
                </Button>
            </div>
        </section>
    )



}

export default BurgerConstructor;