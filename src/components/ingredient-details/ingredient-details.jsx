import style from './ingredient-details.module.css';
import PropTypes from 'prop-types';

const IngredientDetails = ({ image, name, calories, carbohydrates, fat, proteins }) => {

    const nutritionDimension = 'text text_type_main-default text_color_inactive';
    const nutritionquantity = 'text text_type_digits-default text_color_inactive'

    return (
        <>
            <div className={style.container}>
                <h2 className="text text_type_main-large">Детали ингредиента</h2>
                <div className={style.image}>
                    <img src={image} alt={name}></img>
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
        </>
    );
}

IngredientDetails.propTypes = {
    calories: PropTypes.number.isRequired,
    carbohydrates: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    proteins: PropTypes.number.isRequired
}


export default IngredientDetails;