import style from "./style.module.scss";

type ListItemProps = {
    title: string,
    time: string
}

export function ListItem ({title, time} : ListItemProps) {
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