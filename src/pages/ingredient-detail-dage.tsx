import React, { FC } from 'react';
import style from './page.module.css';
import { useSelector, useDispatch } from '../services/hooks';
import IngredientDetails from '../components/ingredient-details/ingredient-details';
import { updateIngredients } from '../utils/utils';
import { addIngredientDetails } from '../services/actions/ingredient-details-actions';


const IngredientDetailsPage: FC = () => {

    const dispatch = useDispatch();
    const ingredient = useSelector(state => state.details.ingredientDetails);

    React.useEffect(() => {
        updateIngredients(addIngredientDetails, dispatch)
    }, [dispatch])


    return (
        <div className={style.container}>
            {ingredient ?
                <IngredientDetails />
                :
                (<div className={style.loader} id="loader"></div>)}
        </div>
    )
};

export default IngredientDetailsPage;