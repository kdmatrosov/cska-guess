import React, {useRef, useState} from "react";
import classes from './game.module.css';
import {useNavigate} from "react-router";
import {Hint} from "../../components";
import {Randomizer} from "./randomizer.ts";
import {persons} from "../../persons";
import {shuffleArray} from "../../utils/shuffle-array.ts";
import type {Person} from "../../types";

function secondsToMmSs(secs: number): string {
    // Calculate minutes and seconds
    const minutes = Math.floor(secs / 60); // Get the whole minutes
    const seconds = Math.floor(secs % 60); // Get the remaining seconds

    // Use padStart to ensure two digits for both minutes and seconds
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
}

const rand = new Randomizer(persons);
const first = rand.getPerson();
const total = persons.length;

export const Game: React.FC = () => {
    let navigate = useNavigate();
    const [finished, setFinished] = useState(false);
    const [guessed, setGuessed] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [person, setPerson] = useState(first);
    const intervalID = useRef(0);
    React.useEffect(() => {
        intervalID.current = window.setInterval(() => {
            setSeconds((prevState) => prevState + 1);
        }, 1000)
        return () => clearInterval(intervalID.current);
    }, [])
    const timer = React.useMemo(() => secondsToMmSs(seconds), [seconds])
    const image = React.useMemo(() => rand.getImageFromPerson(person), [person])
    const finalPersons = React.useMemo(() => {
        if (!person) {
            return [];
        }
        const result = rand.getExtraPersons(person).concat(person);
        shuffleArray(result);
        return result;
    }, [person])

    const onBackClick = () => {
        navigate("/");
    }

    const onChoice = (chosen: Person) => {
        if (chosen.surname === person.surname) {
            setGuessed((prevState) => prevState + 1);
            setPerson(rand.getPerson());
            if (guessed + 1 === total) {
                setFinished(true);
                clearInterval(intervalID.current);
            }
        } else {
            setFinished(true);
            clearInterval(intervalID.current);
        }
    };
    if (finished) {
        return (
            <div className={classes.wrapper}>
                <div className={classes.result}>
                    <div className={classes.resultGuessed}>Угадано {guessed} из {total}</div>
                    <div className={classes.resultTimer}>Время {timer}</div>
                </div>
                <div onClick={onBackClick} className={classes.resultMain}>На главную</div>
            </div>
        )
    }
    if (!person || !finalPersons.length) {
        return null;
    }
    return (
        <div className={classes.wrapper}>
            <div className={classes.header}>
                <div className={classes.back} onClick={onBackClick}>❮ Назад</div>
                <div>{guessed} из {total}</div>
                <div className={classes.timer}>{timer}</div>
            </div>
            <div className={classes.game}>
                <img src={image} alt="" className={classes.image}/>
                <div className={classes.persons}>
                    {finalPersons.map((fp) => (
                        <div key={fp.surname} className={classes.person} onClick={() => onChoice(fp)}>
                            <div>{fp.name}</div>
                            <div>{fp.surname}</div>
                        </div>
                    ))}
                </div>
            </div>
            <Hint/>
        </div>
    )
}
