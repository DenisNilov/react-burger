import React, { ForwardedRef } from 'react';
import IngredientsComponent from '../burger-ingredients-component/burger-ingredients-component';
import style from './burger-ingredients-component-list.module.css';
import { IIngredient } from '../../services/types/data';


interface ICount {
    [key: string]: number;
}

interface PropsIngredientsComponentList {
    name: string;
    ingredients: Array<IIngredient>;
    count: ICount;
    id: string;
}

const IngredientsComponentList = React.forwardRef<HTMLHeadingElement, PropsIngredientsComponentList>(
    ({ name, ingredients, count, id }, ref: ForwardedRef<HTMLHeadingElement>) => {
        return (
            <li>
                <h2 className="text_type_main-medium mt-10" ref={ref} id={id}>{name} </h2>
                <ul className={style.ingredienrs_component_list}>
                    {ingredients.map(ingredient => <IngredientsComponent
                        ingredient={ingredient}
                        key={ingredient._id}
                        count={count[ingredient._id]}
                    />)}
                </ul>
            </li>)
    });


export default IngredientsComponentList;