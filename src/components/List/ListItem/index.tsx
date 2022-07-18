import style from "./style.module.scss";
import { SelectableTask } from "../../../types/types";

export function ListItem ({id, title, time, isSelected, isFinished, selectFunction} : SelectableTask) {
    return (
        <>
        <li className={`${style.item} ${isSelected ? style.itemSelecionado : ''} ${isFinished ? style.itemCompletado : ''}`}
            onClick={() => selectFunction({id, title, time, isSelected, isFinished: false})}>
            <h3>{title}</h3>
            <span>{time}</span>
        </li>
        </>

    )
}