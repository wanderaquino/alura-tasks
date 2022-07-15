import {Button} from "../Button/index";
import { Watch } from "./Watch";
import style from "./style.module.scss";
import {WatchProps, WatchTime} from "../../types/types";
import { useEffect, useState } from "react";
const INITIAL_COUNT_VALUE = 60

export function Stopwatch ({time} : WatchProps) {

    const [timer, setTimer] = useState<WatchTime>({
        startTime: "00:00"
    });

    const [manageInterval, setManageInterval] = useState({
        shouldReloadInterval: false,
        shouldClearInterval: false
    });
    const [intervalId, setIntervalId] = useState<number>(0);

    useEffect(() =>{
        if(manageInterval.shouldReloadInterval) {
            clearInterval(intervalId);
            runStopwatch();
            return;
        } 
        clearInterval(intervalId);
    }, [manageInterval])


    useEffect(() => {
        setTimer({
            startTime: time
        });
    }, [time]);

    function runStopwatch() {
        let intervalId = 0;
        intervalId = setInterval(stopWatchRules, 1000);
        setIntervalId(intervalId);
    }

    function stopWatchRules() {
        const {startTime} = timer;

        const minutes = /:(\d\d)/.exec(startTime);
        const hours = /(\d\d):/.exec(startTime);
            
        let parsedMinutes = parseInt(minutes? minutes[1] : "");
        let parsedHours = parseInt(hours? hours[1] : "");

        if(parsedHours === 0 && parsedMinutes === 0) {
            setManageInterval({
                shouldReloadInterval: false,
                shouldClearInterval: true
            });
            return false
        }

        if(parsedHours > 0 && parsedMinutes === 0 ) {
            parsedHours -= 1;
            parsedMinutes = INITIAL_COUNT_VALUE -1;
            const newTime = `${parsedHours.toString().padStart(2,"0")}:${parsedMinutes.toString()}`;
            setTimer({
                startTime: newTime
            });
            setManageInterval({
                shouldReloadInterval: true,
                shouldClearInterval: true
            });
            return true;
        }


        if(parsedHours >= 0 && parsedMinutes > 0) {
            parsedMinutes = parsedMinutes - 1;
            const newTime = `${parsedHours.toString().padStart(2,"0")}:${parsedMinutes.toString().padStart(2,"0")}`;
            setTimer({
                startTime: newTime
            })
            setManageInterval({
                shouldReloadInterval: true,
                shouldClearInterval: true
            });
            return true;
        }
    }

    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
              <Watch time={timer.startTime} />  
            </div>
            <Button textButton="Começar" type="button" onClickFunction={() => runStopwatch()} />
        </div>
    )
}