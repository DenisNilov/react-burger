import React from 'react';
import style from './burger-ingredienrs-tabs.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

const Tabs = () => {

    const tabs = [
        { id: "bun", title: "Булки" },
        { id: "sauce", title: "Соусы" },
        { id: "main", title: "Начинки" },
    ];

    const [current, setCurrent] = React.useState('one')
    return (
        <nav className={style.tabs} >
            {tabs.map(tab => (
                <Tab
                    key={tab.id}
                    value={tab.id}
                    active={current === tab.id}
                    onClick={setCurrent}
                >
                    {tab.title}
                </Tab>
            ))
            }
        </nav>
    )

}

export default Tabs;