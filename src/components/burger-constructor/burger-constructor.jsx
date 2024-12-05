import React from "react";
import style from './burger-constuctor.module.css';
import Modal from "../modal/modal.jsx";
import OrderDetails from "../order-details/order-details.jsx";
import { CurrencyIcon, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector, useDispatch } from "react-redux";
import { postOrderAction } from '../../services/actions/order-actions';
import { useDrop } from "react-dnd";
import { addIngConstructor, setBunConstructor, resetIngConstructor } from '../../services/actions/constructor-actions.jsx';
import { BunTop, BunBottom, IngredientsList } from '../burger-items-ingredients/burger-items-ingredients.jsx';
import { useNavigate } from "react-router-dom";


const BurgerConstructor = () => {

    const dispatch = useDispatch();
    const { bun, ingredients } = useSelector(state => state.burgerConstructor);
    const orderNumber = useSelector(state => state.order);
    const [openModal, setOpenModal] = React.useState(false);
    const isAuth = useSelector((store) => store.user.isAuth);
    const navigate = useNavigate()


    const postOrderNumer = () => {
        if (bun && ingredients) {
            dispatch(postOrderAction([bun._id, ...ingredients].map(ingredient => ingredient._id)));
        }
    };


    const totalPrice = React.useMemo(() =>
        (bun ? bun.price * 2 : 0) + (ingredients ? ingredients
            .reduce((accumulator, ingredient) => accumulator + ingredient.price, 0) : 0),
        [ingredients, bun]);

    const showModal = () => {
        if (isAuth) {
            setOpenModal(true);
            postOrderNumer();
        } else {
            navigate('/login')
        }

    };

    const handleClose = () => {
        setOpenModal(false);
        dispatch(resetIngConstructor());
    };


    const [, dropTarget] = useDrop({
        accept: "ingredient",
        drop(itemId) {
            onDropHandler(itemId);
        },
    });

    const onDropHandler = (ingredient) => {
        if (ingredient.type === "bun") {
            dispatch(setBunConstructor(ingredient));
        } else {
            dispatch(addIngConstructor(ingredient));
        }
    };



    return (
        <section className={style.box}>
            <div
                className={style.elements}
                ref={dropTarget}
            >
                <div className={style.bun}>
                    {bun ? <BunTop ingredient={bun} />
                        : <p className="text text_type_main-medium">Перетащи сюда булку</p>}
                </div>
                <ul className={style.content}>
                    {ingredients ? <IngredientsList ingredients={ingredients} />
                        : bun && <>
                            <p
                                className="text text_type_main-medium"
                                style={{ width: "500px" }}
                            >
                                А теперь перетащи сюда начинку и соусы
                            </p>
                        </>}
                </ul>
                <div className={style.bun}>
                    {bun && <BunBottom ingredient={bun} />}
                </div>
            </div>
            <div className={style.bottom}>
                <div className={style.sum}>
                    <p className="text text_type_digits-medium">
                        {totalPrice}
                    </p>
                    <CurrencyIcon type="primary" />
                </div>
                <Button
                    htmlType="button"
                    type="primary"
                    size="large"
                    onClick={showModal}
                    disabled={!bun}
                >
                    Оформить заказ
                </Button>
            </div>
            {openModal &&
                <Modal onClose={handleClose} isOpen={openModal}>
                    <OrderDetails
                        orderNumber={orderNumber}
                        isLoading={orderNumber.orderRequest}
                    />

                </Modal>
            }
        </section>
    )
}

export default BurgerConstructor;