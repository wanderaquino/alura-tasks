import {Form} from "./components/Form";
import {List} from "./components/List";
import style from "./App.module.scss";
import { Stopwatch } from "./components/Stopwatch";
import { useState } from "react";
import {TaskItemProps, TaskListProps} from "./types/types";

function App() {

  const [taskList, setTaskList] = useState<TaskListProps>({
    tasks: []
  });

  function addNewTask({id, title, time, isSelected = false}: TaskItemProps ) {
    const {tasks} = taskList;
    setTaskList({
        tasks: [...tasks, {id, title, time, isSelected}]
      });
  }

  function selectTask (taskItem:TaskItemProps) {
    setTaskList(previousTaskList => 
        {
        return {
          tasks: previousTaskList.tasks.map(task => {
            return {
              ...task, isSelected: task.id === taskItem.id ? true : false
        }
          })
        }
      }
    )
  }

  return (
    <div className={style.AppStyle}>
      <Form addTask={addNewTask}/>
      {
        taskList.tasks && <List tasks={taskList.tasks} selectFunction={selectTask}/>
      }
      <Stopwatch />
    </div>
  )
}

export default App
