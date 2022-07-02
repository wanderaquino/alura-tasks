import { ListItem } from "./ListItem";
import style from "./style.module.scss";

interface ListProps {
    tasks: {
        title: string;
        time: string
    }[]
};

export function List ({tasks} : ListProps) {
    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {
                    tasks.map((task, index) => 
                    <ListItem key={index} title={task.title} time={task.time}></ListItem>)
                }
            </ul>
        </aside>
    )
};