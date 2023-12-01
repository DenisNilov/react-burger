import style from './constructor-ingredient.module.css';
import {
    ConstructorElement,
    DragIcon
} from "@ya.praktikum/react-developer-burger-ui-components";

const ConstructorIngredient = ({ data }) => {
    const { name, price, image } = data;
    return (
        <li className={style.ingredient}>
            <DragIcon type="primary" />
            <ConstructorElement
                text={name}
                price={price}
                thumbnail={image}
            />
        </li>
    )
}

export default ConstructorIngredient;