import style from "./style.module.scss";
import { SelectableTask } from "../../../types/types";

export function ListItem ({id, title, time, isSelected, selectFunction} : SelectableTask) {
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