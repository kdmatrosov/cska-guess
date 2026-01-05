import React from "react";
import classes from './menu.module.css';
import {useNavigate} from "react-router";
import {Hint} from "../../components";
import {persons} from "../../persons";

const title = 'ЦСКА\nУгадайка'

export const Menu: React.FC = () => {
    let navigate = useNavigate();
    const onMenuClick = (route: 'game/one' | 'game/time') => {
        navigate("/" + route);
    }
    return (
        <div className={classes.wrapper}>
            <div className={classes.name}>
                {title}
            </div>
            <div className={classes.menu}>
                <div className={classes.menuItem} onClick={() => onMenuClick('game/one')}>
                    ДО ПЕРВОЙ ОШИБКИ
                </div>
                <div className={classes.menuItem} onClick={() => onMenuClick('game/time')}>
                    {persons.length * 3} секунд
                    <div className={classes.menuItemPostfix}>ДО ПЕРВОЙ ОШИБКИ</div>
                </div>
            </div>
            <Hint />
        </div>
    )
}
