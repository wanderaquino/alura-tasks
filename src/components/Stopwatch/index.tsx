import {Button} from "../Button/index";
import { Watch } from "./Watch";
import style from "./style.module.scss";
import {WatchProps} from "../../types/types";

export function Stopwatch ({time} : WatchProps) {
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
              <Watch time={time} />  
            </div>
            <Button textButton="Começar" />
        </div>
    )
}