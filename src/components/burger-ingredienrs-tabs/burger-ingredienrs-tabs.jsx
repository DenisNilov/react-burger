import React from 'react';
import style from './burger-ingredienrs-tabs.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { TABS } from '../../utils/constants.js';
import PropTypes from 'prop-types';

const Tabs = ({ refs }) => {

    const [current, setCurrent] = React.useState('bun')

    const { bunsRef, sauseRef, mainRef } = refs;

    const handleClickTab = (e) => {
        setCurrent(e);
        switch (e) {
            case 'bun': bunsRef.current.scrollIntoView({ behavior: "smooth" });
                break
            case 'sause': sauseRef.current.scrollIntoView({ behavior: "smooth" });
                break
            case 'main': mainRef.current.scrollIntoView({ behavior: "smooth" });
                break
            default: bunsRef.current.scrollIntoView({ behavior: "smooth" });
                break
        }



    }

    return (
        <nav className={style.tabs} >
            {TABS.map(tab => (
                <Tab
                    key={tab.id}
                    value={tab.id}
                    active={current === tab.id}
                    onClick={e => handleClickTab(e)}
                >
                    {tab.title}
                </Tab>
            ))
            }
        </nav>
    )

}

Tabs.propTypes = {
    ref: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({ current: PropTypes.object })
    ])
}

export default Tabs;