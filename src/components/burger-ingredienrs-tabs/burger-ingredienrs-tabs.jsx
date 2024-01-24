import React from 'react';
import style from './burger-ingredienrs-tabs.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { TABS } from '../../utils/constants.js';

const Tabs = () => {

    const [current, setCurrent] = React.useState('bun')
    return (
        <nav className={style.tabs} >
            {TABS.map(tab => (
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