import React from "react";
import style from './burger-constuctor.module.css';
import ConstructorIngredient from '../constructor-ingredient/constructor-ingredient.jsx';
import Modal from "../modal/modal.jsx";
import OrderDetails from "../order-details/order-details.jsx";
import { ConstructorElement, CurrencyIcon, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { BurgerIngredientsContext } from '../../services/appContext.js';

const BurgerConstructor = () => {

    const ingredients = React.useContext(BurgerIngredientsContext);
    const [openModal, setOpenModal] = React.useState(false);
    const [totalPrice, setTotalPrice] = React.useState(0);

    const mainIngredients = ingredients.filter(element =>
        element.type !== 'bun'
    );


    const bunPrice = ingredients.filter(ingredient => ingredient.type === 'bun').map(bun => {
        return bun.price
    })

    React.useEffect(() => {
        const sum = mainIngredients.reduce(
            (accumulator, total) => accumulator + total.price, bunPrice[0] * 2)
        setTotalPrice(sum);
    }, [mainIngredients, bunPrice]);

    const showModal = () => {
        setOpenModal(true);
    };

    const handleClose = () => {
        setOpenModal(false);
    };

    const bunTop = ingredients.map(ingredient =>
        <ConstructorElement
            type="top"
            isLocked={true}
            text={ingredient.name}
            price={ingredient.price}
            thumbnail={ingredient.image}
            key={ingredient._id}
        />
    );

    const bunBottom = ingredients.map(ingredient =>
        <ConstructorElement
            type="bottom"
            isLocked={true}
            text={ingredient.name}
            price={ingredient.price}
            thumbnail={ingredient.image}
            key={ingredient._id}
        />
    );


    const ingredientsList = ingredients
        .map(ingredient => ingredient.type !== 'bun'
            ? <ConstructorIngredient
                data={ingredient}
                key={ingredient._id}
            />
            : '');




    return (
        <section className={style.box}>
            <div className={style.elements}>
                <div className={style.bun}>
                    {bunTop[0]}
                </div>
                <ul className={style.content}>
                    {ingredientsList}
                </ul>
                <div className={style.bun}>
                    {bunBottom[0]}
                </div>
            </div>
            <div className={style.bottom}>
                <div className={style.sum}>
                    <p className="text text_type_digits-medium">
                        {totalPrice || 0}
                    </p>
                    <CurrencyIcon type="primary" />
                </div>
                <Button
                    htmlType="button"
                    type="primary"
                    size="large"
                    onClick={showModal}
                >
                    Оформить заказ
                </Button>
            </div>
            {openModal &&
                <Modal onClose={handleClose} isOpen={openModal}>
                    <OrderDetails />
                </Modal>
            }


        </section>
    )
}

export default BurgerConstructor;