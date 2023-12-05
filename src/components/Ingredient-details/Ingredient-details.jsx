import style from './Ingredient-details.module.css';

const IngredientDetails = () => {

    return (
        <>
            <div className={style.container}>
                <div className={style.image}>
                    <img src='' alt=''></img>
                </div>
                <p className={`text text_type_main-medium mt-4 ${style.name}`}>
                    {''}
                </p>
                <ul className={style.nutritions}>
                    <li className={style.nutrition}>
                        <p className={
                            `text text_type_main-default text_color_inactive
                            ${style.caloriesText}`
                        }>
                            Калории, ккал
                        </p>
                        <p className={
                            `text text_type_digits-default text_color_inactive
                            ${style.caloriesNumber}`
                        }>
                            {''}
                        </p>
                    </li>
                    <li className={style.nutrition}>
                        <p className={
                            `text text_type_main-default text_color_inactive
                            ${style.proteinsText}`
                        }>
                            Белки, г
                        </p>
                        <p className={
                            `text text_type_digits-default text_color_inactive
                            ${style.proteinsNumber}`
                        }>
                            {''}
                        </p>
                    </li>
                    <li className={style.nutrition}>
                        <p className={
                            `text text_type_main-default text_color_inactive
                            ${style.fatText}`
                        }>
                            Жиры, г
                        </p>
                        <p className={
                            `text text_type_digits-default text_color_inactive
                            ${style.fatNumber}`
                        }>
                            {''}
                        </p>
                    </li>
                    <li className={style.nutrition}>
                        <p className={
                            `text text_type_main-default text_color_inactive
                            ${style.carbohydratesText}`
                        }>
                            Углеводы, г
                        </p>
                        <p className={
                            `text text_type_digits-default text_color_inactive
                            {style.carbohydratesNumber}`
                        }>
                            {''}
                        </p>
                    </li>
                </ul>
            </div >
        </>
    );
}

export default IngredientDetails;