import {Button} from "../Button/index";
import style from "./style.module.scss";
import {FormEvent, useState} from "react";
import { FormProps } from "../../types/types";
import {v4} from "uuid";


export function Form ({addTask} : FormProps) {

    const [title, setTitle] = useState<string>();
    const [time, setTime] = useState<string>();

    function handleChangeTitle(title : string){
        setTitle(title);
    };

    function handleCHangeTime(time: string) {
        setTime(time);
    }

    function setNewTask(e:FormEvent){
        e.preventDefault();
        if(title === undefined || time === undefined) {
            return;
        }
        addTask({id: v4(), title, time, isSelected: false});
    };

    return (
        <form className={style.novaTarefa} onSubmit={e => setNewTask(e)}>
            <div className={style.inputContainer}>
                <label htmlFor="task">Adicione um novo estudo</label>
                <input 
                    type="text" 
                    name="task" 
                    id="task" 
                    placeholder="O que você quer estudar hoje?" 
                    required
                    onChange={e => handleChangeTitle(e.target.value)}></input>
            </div>
            <div className={style.inputContainer}>
                <label htmlFor="time">Tempo</label>
                <input 
                    type="time"
                    step="1"
                    name="time"
                    id="time"
                    min="00:00:00"
                    max="01:30:00"
                    required
                    onChange={e => handleCHangeTime(e.target.value)}></input>
            </div>
            <Button textButton="Adicionar"/>
        </form>
    )
}