import style from "./style.module.scss";

type ListItemProps = {
    title: string,
    time: string
}

export function ListItem ({title, time} : ListItemProps) {
    return (
        <>
        <li className={style.item}>
            <h3>{title}</h3>
            <span>{time}</span>
        </li>
        </>

    )
}