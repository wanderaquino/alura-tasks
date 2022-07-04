import style from "./style.module.scss";
import { TaskProps } from "../../../types/types";

export function ListItem ({id, title, time, isSelected, selectFunction} : TaskProps) {
    return (
        <>
        <li className={`${style.item} ${isSelected ? style.itemSelecionado : ''}`}
            onClick={() => selectFunction({id, title, time, isSelected})}>
            <h3>{title}</h3>
            <span>{time}</span>
        </li>
        </>

    )
}