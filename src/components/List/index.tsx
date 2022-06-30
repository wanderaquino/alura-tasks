import { ListItem } from "./ListItem";
import style from "./style.module.scss";

export function List () {
    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                <ListItem title="React" time="02:00:00" />
                <ListItem title="VueJS" time="01:00:00" />
                <ListItem title="Javascript" time="03:00:00" />
            </ul>
        </aside>
    )
};