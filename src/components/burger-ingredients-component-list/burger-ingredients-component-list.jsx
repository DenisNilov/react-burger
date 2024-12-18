import React from 'react';
import IngredientsComponent from '../burger-ingredients-component/burger-ingredients-component.jsx';
import style from './burger-ingredients-component-list.module.css';

const IngredientsComponentList = React.forwardRef(({ name, ingredients, count, id }, ref) => {
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

//Проверка на пропсы

export default IngredientsComponentList;