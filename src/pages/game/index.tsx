import React, {useRef, useState} from "react";
import classes from './game.module.css';
import {useNavigate, useParams} from "react-router";
import {Hint} from "../../components";
import {Randomizer} from "./randomizer.ts";
import {persons} from "../../persons";
import {shuffleArray, secondsToMmSs} from "../../utils";
import cn from 'classnames';
import type {Person} from "../../types";

const total = persons.length;

export const Game: React.FC = () => {
    let navigate = useNavigate();
    const params = useParams<{ mode: 'one' | 'time' }>();
    const [rand, setRand] = useState(() => new Randomizer(persons));
    const [finished, setFinished] = useState(false);
    const [loadingImage, setLoadingImage] = useState(false);
    const [guessed, setGuessed] = useState(0);
    const [step, setStep] = useState(1);
    const [error, setError] = useState<'mistake' | undefined>();
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
        const timeMode = params.mode === 'time';
        if (timeMode) {
            setSeconds(persons.length * 3);
        }
        intervalID.current = window.setInterval(() => {
            setSeconds((prevState) => {
                if (timeMode && prevState === 1) {
                    setFinished(true);
                    clearInterval(intervalID.current);
                }
                return prevState + 1 * (timeMode ? -1 : 1)
            });
        }, 1000)
        return () => clearInterval(intervalID.current);
    }, [params.mode])
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
        setStep((prevState) => prevState + 1);
        if (step === total) {
            finish()
        }
        if (chosen.surname === person!.surname) {
            setGuessed((prevState) => prevState + 1);
            setPerson(rand.getPerson());
        } else {
            finish();
            setError('mistake')
        }
    };
    if (finished) {
        return (
            <div className={classes.wrapper}>
                <div className={classes.result}>
                    <div className={classes.resultGuessed}>Угадано {guessed} из {Math.min(guessed + 1, total)}</div>
                    <div className={classes.resultTimer}>Время {seconds === 0 ? 'истекло' : timer}</div>
                </div>
                {error !== undefined && (
                    <div className={classes.resultNotGuessed}>
                        <img src={image} ref={imgRef} alt="" key={image} className={classes.image}/>
                        <div className={classes.resultNotGuessedText}>
                            {`${person?.name} ${person?.surname}`.trim()}
                        </div>
                    </div>
                )}
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
                        <div key={fp.surname + fp.name} className={cn(classes.person, {
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
