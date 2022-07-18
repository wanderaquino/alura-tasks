import { ListItem } from "./ListItem";
import style from "./style.module.scss";
import { SelectableTaskList } from "../../types/types";

export function List ({tasks, selectFunction} : SelectableTaskList) {
    return (
        <aside className={style.listaTarefas}>
        {
        tasks !== undefined && tasks.length > 0 ?
        <>
        <h2>Estudos do dia</h2>
        <ul>
            {
                tasks.map((task) => 
                <ListItem 
                    key={task.id}
                    id={task.id}
                    title={task.title} 
                    time={task.time} 
                    isSelected={task.isSelected}
                    isFinished={task.isFinished}
                    selectFunction={selectFunction} 
                />)
            }
        </ul>
        </>
        : 
        <h2>Você não possui atividades cadastradas ainda. Que tal adicionar uma nova?</h2>
        }
        </aside>
    )
};