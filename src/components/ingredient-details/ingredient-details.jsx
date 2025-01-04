import style from './ingredient-details.module.css';
import { useSelector } from "react-redux";
import { getIngredient } from '../../utils/utils.js';

const IngredientDetails = () => {

    const ingredient = useSelector(state => state.details.ingredientDetails) || getIngredient();
    const { image_large, name, calories, carbohydrates, fat, proteins } = ingredient;
    const nutritionDimension = 'text text_type_main-default text_color_inactive';
    const nutritionquantity = 'text text_type_digits-default text_color_inactive';

    return (
        <>
            {
                ingredient &&
                <div className={style.container}>
                    <h2 className="text text_type_main-large">Детали ингредиента</h2>
                    <div className={style.image}>
                        <img src={image_large} alt={name}></img>
                    </div>
                    <p className={`text text_type_main-medium mt-4 ${style.name}`}>
                        {name}
                    </p>
                    <ul className={style.nutritions}>
                        <li className={style.nutrition}>
                            <p className={nutritionDimension}>
                                Калории, ккал
                            </p>
                            <p className={nutritionquantity}>
                                {calories / 10}
                            </p>
                        </li>
                        <li className={style.nutrition}>
                            <p className={nutritionDimension}>
                                Белки, г
                            </p>
                            <p className={nutritionquantity}>
                                {proteins / 10}
                            </p>
                        </li>
                        <li className={style.nutrition}>
                            <p className={nutritionDimension}>
                                Жиры, г
                            </p>
                            <p className={nutritionquantity}>
                                {fat / 10}
                            </p>
                        </li>
                        <li className={style.nutrition}>
                            <p className={nutritionDimension}>
                                Углеводы, г
                            </p>
                            <p className={nutritionquantity}>
                                {carbohydrates / 10}
                            </p>
                        </li>
                    </ul>
                </div >
            }

        </>
    );
}



export default IngredientDetails;