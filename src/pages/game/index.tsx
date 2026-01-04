import React, {useRef, useState} from "react";
import classes from './game.module.css';
import {useNavigate} from "react-router";
import {Hint} from "../../components";
import {Randomizer} from "./randomizer.ts";
import {persons} from "../../persons";
import {shuffleArray} from "../../utils/shuffle-array.ts";
import cn from 'classnames';
import type {Person} from "../../types";
import {secondsToMmSs} from "../../utils/seconds-to-mm-ss.ts";

const total = persons.length;

export const Game: React.FC = () => {
    let navigate = useNavigate();
    const [rand, setRand] = useState(() => new Randomizer(persons));
    const [finished, setFinished] = useState(false);
    const [loadingImage, setLoadingImage] = useState(false);
    const [guessed, setGuessed] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [person, setPerson] = useState<Person | undefined>();
    const intervalID = useRef(0);
    const imgRef = useRef<HTMLImageElement | null>(null)
    React.useEffect(() => {
        if (!imgRef.current) {
            return
        }
        const id = window.setTimeout(() => {
            setLoadingImage(true);
        }, 500);
        function load() {
            clearInterval(id);
            setLoadingImage(false);
        }
        imgRef.current!.addEventListener('load', load);
        return function () {
            clearInterval(id);
            if (!imgRef.current) {
                return
            }
            imgRef.current!.removeEventListener('load', load);
        }
    }, [person])
    React.useEffect(() => {
        const random = new Randomizer(persons);
        setPerson(random.getPerson());
        setRand(random);
    }, [])
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

    const finish = () => {
        setFinished(true);
        clearInterval(intervalID.current);
    }
    const onChoice = (chosen: Person) => {
        if (chosen.surname === person!.surname) {
            setGuessed((prevState) => prevState + 1);
            setPerson(rand.getPerson());
            if (guessed + 1 === total) {
                finish()
            }
        } else {
            finish();
        }
    };
    if (finished) {
        return (
            <div className={classes.wrapper}>
                <div className={classes.result}>
                    <div className={classes.resultGuessed}>Угадано {guessed} из {Math.min(guessed + 1, total)}</div>
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
                {loadingImage && <div className={classes.imageLoading}>Загрузка фотографии...</div>}
                <img src={image} ref={imgRef} alt="" key={image} className={classes.image}/>
                <div className={classes.persons}>
                    {finalPersons.map((fp) => (
                        <div key={fp.surname} className={cn(classes.person, {
                            [classes.short]: fp.name.length > 10 || fp.surname.length > 10
                        })} onClick={() => onChoice(fp)}>
                            {!!fp.name && <div>{fp.name}</div>}
                            <div>{fp.surname}</div>
                        </div>
                    ))}
                </div>
            </div>
            <Hint/>
        </div>
    )
}
