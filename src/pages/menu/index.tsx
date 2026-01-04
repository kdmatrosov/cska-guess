import React from "react";
import classes from './menu.module.css';
import {useNavigate} from "react-router";
import {Hint} from "../../components";


export const Menu: React.FC = () => {
    let navigate = useNavigate();
    const onMenuClick = (route: 'game') => {
        navigate("/" + route);
    }
    return (
        <div className={classes.wrapper}>
            <div className={classes.name}>
                ЦСКА. Угадайка
            </div>
            <div className={classes.menu}>
                <div className={classes.menuItem} onClick={() => onMenuClick('game')}>
                    ДО ПЕРВОЙ ОШИБКИ
                </div>
            </div>
            <Hint />
        </div>
    )
}
