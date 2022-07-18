import {Button} from "../Button/index";
import { Watch } from "./Watch";
import style from "./style.module.scss";
import {WatchProps} from "../../types/types";
import { useEffect, useState } from "react";
const INITIAL_COUNT_VALUE = 60

export function Stopwatch ({time, finishTask} : WatchProps) {

    const [timer, setTimer] = useState<WatchProps>({
        time: "00:00"
    });

    const [manageInterval, setManageInterval] = useState({
        shouldReloadInterval: false,
        shouldClearInterval: false,
        shoudBlockButton: false
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
            time: time
        });
    }, [time]);

    function runStopwatch() {
        let intervalId = 0;
        intervalId = setInterval(stopWatchRules, 1000);
        setIntervalId(intervalId);
    }

    function stopWatchRules() {
        const {time} = timer;

        const minutes = /:(\d\d)/.exec(time);
        const hours = /(\d\d):/.exec(time);
            
        let parsedMinutes = parseInt(minutes? minutes[1] : "");
        let parsedHours = parseInt(hours? hours[1] : "");

        if(parsedHours === 0 && parsedMinutes === 0) {
            setManageInterval({
                shouldReloadInterval: false,
                shouldClearInterval: true,
                shoudBlockButton: false
            });
            finishTask && finishTask();
            return;
        }

        if(parsedHours > 0 && parsedMinutes === 0 ) {
            parsedHours -= 1;
            parsedMinutes = INITIAL_COUNT_VALUE -1;
            const newTime = `${parsedHours.toString().padStart(2,"0")}:${parsedMinutes.toString()}`;
            setTimer({
                time: newTime
            });
            setManageInterval({
                shouldReloadInterval: true,
                shouldClearInterval: true,
                shoudBlockButton: true
            });
            return;
        }


        if(parsedHours >= 0 && parsedMinutes > 0) {
            parsedMinutes = parsedMinutes - 1;
            const newTime = `${parsedHours.toString().padStart(2,"0")}:${parsedMinutes.toString().padStart(2,"0")}`;
            setTimer({
                time: newTime
            })
            setManageInterval({
                shouldReloadInterval: true,
                shouldClearInterval: true,
                shoudBlockButton: true
            });
            return;
        }
    }

    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
              <Watch time={timer.time} />  
            </div>
            <Button isDisabled={manageInterval.shoudBlockButton} textButton="Começar" type="button" onClickFunction={() => runStopwatch()} />
        </div>
    )
}