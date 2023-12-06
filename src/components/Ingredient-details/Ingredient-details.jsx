import style from './Ingredient-details.module.css';
import PropTypes from 'prop-types';

const IngredientDetails = ({ image, name, calories, carbohydrates, fat, proteins }) => {

    const styleTextItem = 'text text_type_main-default text_color_inactive';
    const styleTextNum = 'text text_type_digits-default text_color_inactive'

    return (
        <>
            <div className={style.container}>
                <div className={style.image}>
                    <img src={image} alt=''></img>
                </div>
                <p className={`text text_type_main-medium mt-4 ${style.name}`}>
                    {name}
                </p>
                <ul className={style.nutritions}>
                    <li className={style.nutrition}>
                        <p className={styleTextItem}>
                            Калории, ккал
                        </p>
                        <p className={styleTextNum}>
                            {calories / 10}
                        </p>
                    </li>
                    <li className={style.nutrition}>
                        <p className={styleTextItem}>
                            Белки, г
                        </p>
                        <p className={styleTextNum}>
                            {proteins / 10}
                        </p>
                    </li>
                    <li className={style.nutrition}>
                        <p className={styleTextItem}>
                            Жиры, г
                        </p>
                        <p className={styleTextNum}>
                            {fat / 10}
                        </p>
                    </li>
                    <li className={style.nutrition}>
                        <p className={styleTextItem}>
                            Углеводы, г
                        </p>
                        <p className={styleTextNum}>
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