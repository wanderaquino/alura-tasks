import {Form} from "./components/Form";
import {List} from "./components/List";
import style from "./App.module.scss";
import { Stopwatch } from "./components/Stopwatch";
import { useState } from "react";
import {TaskItemProps, TaskListProps} from "./types/types";

function App() {

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
      <List tasks={tasks}/>
      <Stopwatch />
    </div>
  )
}

export default App
