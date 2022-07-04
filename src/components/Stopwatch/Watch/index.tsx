import style from "./style.module.scss";
import {WatchProps} from "../../../types/types";

export function Watch ({time} : WatchProps) {
    return (
        <>
            <span className={style.relogioNumero}>{time[0]}</span>
            <span className={style.relogioNumero}>{time[1]}</span>
            <span className={style.relogioDivisao}>{time[2]}</span>
            <span className={style.relogioNumero}>{time[3]}</span>
            <span className={style.relogioNumero}>{time[4]}</span>
        </>
    )
}