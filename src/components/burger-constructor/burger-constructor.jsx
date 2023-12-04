import style from './burger-constuctor.module.css';
import ConstructorIngredient from '../constructor-ingredient/constructor-ingredient.jsx';
import PropTypes from 'prop-types';
import Modal from "../modal/modal.jsx";
import { ingredientsPropTypes } from '../../utils/constants.js'
import { ConstructorElement, CurrencyIcon, Button }
    from "@ya.praktikum/react-developer-burger-ui-components";

const BurgerConstructor = ({ ingredients }) => {

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

            <Modal>

            </Modal>
        </section>
    )
}

BurgerConstructor.propTypes = {
    ingredients: PropTypes.arrayOf(ingredientsPropTypes).isRequired,
}

export default BurgerConstructor;