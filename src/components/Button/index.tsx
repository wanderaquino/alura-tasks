import style from "./style.module.scss";
import {ButtonProps} from "../../types/types";


export function Button ({textButton, type, onClickFunction, isDisabled=false} : ButtonProps) {
    return (
        <button 
            className={`${style.button} ${isDisabled && style.buttonDisabled}`} 
            type={type} onClick={onClickFunction} 
            disabled={isDisabled}>
            {textButton}
        </button>
    )
}