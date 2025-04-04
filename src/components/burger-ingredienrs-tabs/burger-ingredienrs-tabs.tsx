import React, { FC } from 'react';
import style from './burger-ingredienrs-tabs.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { TABS } from '../../utils/constants';

interface IInView {
    inViewBun: boolean;
    inViewSause: boolean;
    inViewMain: boolean;
}
interface ITabsProps {
    inView: IInView;
}

const Tabs: FC<ITabsProps> = ({ inView }) => {

    const [current, setCurrent] = React.useState('bun')

    const { inViewBun, inViewSause, inViewMain } = inView;

    const handleClickTab = (e: string) => {
        setCurrent(e);
        const item = document.getElementById(e);
        if (item) {
            item.scrollIntoView({ behavior: "smooth" });
        }
    };

    React.useEffect(() => {
        if (inViewBun) {
            setCurrent("bun");
        } else if (inViewSause) {
            setCurrent("sauce");
        } else if (inViewMain) {
            setCurrent("main");
        }
    }, [inViewBun, inViewMain, inViewSause]);



    return (
        <nav className={style.tabs} >
            {TABS.map(tab => (
                <Tab
                    key={tab.id}
                    value={tab.id}
                    active={current === tab.id}
                    onClick={handleClickTab}
                >
                    {tab.title}
                </Tab>
            ))
            }
        </nav>
    )

}

export default Tabs;