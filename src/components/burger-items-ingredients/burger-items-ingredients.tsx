import { IIngredient } from '../../services/types/data';
import ConstructorIngredient from '../constructor-ingredient/constructor-ingredient';
import { FC } from 'react';

interface IIngredientsListProps {
    ingredients: Array<IIngredient>;
}
const IngredientsList: FC<IIngredientsListProps> = ({ ingredients }) => {
    return (<>
        {
            ingredients.map((ingredient: IIngredient, index: number) =>
                <ConstructorIngredient
                    data={ingredient}
                    key={ingredient.id}
                    index={index}
                />)
        }
    </>)

}

export default IngredientsList;