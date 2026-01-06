import React from "react";
import classes from './menu.module.css';
import {useNavigate} from "react-router";
import {Hint} from "../../components";
import {persons} from "../../persons";

export const Menu: React.FC = () => {
    let navigate = useNavigate();
    const onMenuClick = (route: 'game/one' | 'game/time' | 'game/countries') => {
        navigate("/" + route);
    }
    return (
        <div className={classes.wrapper}>
            <div className={classes.name}>
                ЦСКА
                <div>на диване</div>
            </div>
            <div className={classes.menu}>
                <div className={classes.menuItem} onClick={() => onMenuClick('game/one')}>
                    Кто этот армеец?
                    <div className={classes.menuItemPostfix}>ДО ПЕРВОЙ ОШИБКИ</div>
                </div>
                <div className={classes.menuItem} onClick={() => onMenuClick('game/time')}>
                    {persons.length * 3} секунд
                    <div className={classes.menuItemPostfix}>ДО ПЕРВОЙ ОШИБКИ</div>
                </div>
                <div className={classes.menuItem} onClick={() => onMenuClick('game/countries')}>
                    Из какой страны?
                    <div className={classes.menuItemPostfix}>ДО ПЕРВОЙ ОШИБКИ</div>
                </div>
            </div>
            <Hint />
        </div>
    )
}
