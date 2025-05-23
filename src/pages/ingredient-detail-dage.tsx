import { FC } from 'react';
import style from './page.module.css';

import IngredientDetails from '../components/ingredient-details/ingredient-details';



const IngredientDetailsPage: FC = () => {


    return (
        <div className={style.container}>
            <IngredientDetails />
        </div>
    )
};

export default IngredientDetailsPage;