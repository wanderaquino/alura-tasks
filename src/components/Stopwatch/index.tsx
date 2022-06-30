import {Button} from "../Button/index";
import { Watch } from "./Watch";
import style from "./style.module.scss";

export function Stopwatch () {
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
              <Watch />  
            </div>
            <Button textButton="Começar" />
        </div>
    )
}