import React from "react";
import {Button} from "../Button/index";
import style from "./style.module.scss";

export function Form () {
    return (
        <form className={style.novaTarefa}>
            <div className={style.inputContainer}>
                <label htmlFor="task">Adicione um novo estudo</label>
                <input 
                    type="text" 
                    name="task" 
                    id="task" 
                    placeholder="O que você quer estudar hoje?" 
                    required></input>
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
                    required></input>
            </div>
            <Button textButton="Adicionar" />
        </form>
    )
}