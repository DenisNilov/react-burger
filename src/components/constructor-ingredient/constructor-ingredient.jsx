import style from './constructor-ingredient.module.css';
import {
    ConstructorElement,
    DragIcon
} from "@ya.praktikum/react-developer-burger-ui-components";

const ConstructorIngredient = () => {
    return (
        <div className={style.ingredient}>
            <DragIcon type="primary" />
            <ConstructorElement
                text="Краторная булка N-200i (верх)"
                price={50}
                thumbnail={'img'}
            />
        </div>
    )
}

export default ConstructorIngredient;