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

  const [selectedTask, setSelectedTask] = useState<TaskItemProps>();

  function addNewTask({id, title, time, isSelected = false}: TaskItemProps ) {
    const {tasks} = taskList;
    setTaskList({
        tasks: [...tasks, {id, title, time, isSelected, isFinished: false}]
      });
  }

  function selectTask (taskItem:TaskItemProps) {
    setSelectedTask(taskItem);
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

  function finishTask () {
    const taskToFinish = selectedTask;
    
    setTaskList(previousTaskList => 
      {
        return {
          tasks: previousTaskList.tasks.map(task => {
            if(task.id === taskToFinish?.id) {
              return {
                ...task, isSelected: false, isFinished: true
              }
            } 
            return task;
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
      <Stopwatch time={selectedTask ? selectedTask.time : "00:00"} finishTask={finishTask}/>
    </div>
  )
}

export default App
