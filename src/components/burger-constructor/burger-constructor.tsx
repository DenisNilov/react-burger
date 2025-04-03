import React, { FC } from "react";
import style from './burger-constuctor.module.css';
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import { CurrencyIcon, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector, useDispatch } from '../../services/hooks';
import { postOrderAction } from '../../services/actions/order-actions';
import { useDrop } from "react-dnd";
import { addIngConstructor, setBunConstructor, resetIngConstructor } from '../../services/actions/constructor-actions';
import IngredientsList from '../burger-items-ingredients/burger-items-ingredients';
import { useNavigate } from "react-router-dom";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { IIngredient } from "../../services/types/data";


const BurgerConstructor: FC = () => {

    const dispatch = useDispatch();
    const { bun } = useSelector(state => state.burgerConstructor);
    const { ingredients }: { ingredients: Array<IIngredient> | null } = useSelector(state => state.burgerConstructor);
    const orderNumber = useSelector(state => state.order);
    const [openModal, setOpenModal] = React.useState<boolean>(false);
    const isAuth = useSelector((store) => store.user.isAuth);
    const navigate = useNavigate()


    const postOrderNumer = () => {
        if (bun && ingredients) {
            dispatch(postOrderAction([bun._id, ...ingredients].map(ingredient => ingredient._id)));
        }
    };


    const totalPrice = React.useMemo(() => {
        const sumBun = bun ? bun.price * 2 : 0;

        const sumIngredients = ingredients ? ingredients.reduce((accumulator: number, ingredient: IIngredient) => {
            return accumulator + ingredient.price
        }, 0) : 0;

        return sumBun + sumIngredients;
    }, [ingredients, bun]);



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
        drop(itemId: IIngredient) {
            onDropHandler(itemId);
        },
    });

    const onDropHandler = (ingredient: IIngredient) => {
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
                    {bun ? <ConstructorElement
                        type='top'
                        isLocked={true}
                        text={`${bun.name} (верх)`}
                        price={bun.price}
                        thumbnail={bun.image}
                    />
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
                    {bun && <ConstructorElement
                        type='bottom'
                        isLocked={true}
                        text={`${bun.name} (низ)`}
                        price={bun.price}
                        thumbnail={bun.image}
                    />}
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