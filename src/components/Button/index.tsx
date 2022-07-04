import style from "./style.module.scss";
import {ButtonProps} from "../../types/types";


export function Button ({textButton, type, onClickFunction} : ButtonProps) {
    return (
        <button className={style.button} type={type} onClick={onClickFunction}>
            {textButton}
        </button>
    )
}