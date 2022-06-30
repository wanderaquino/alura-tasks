import {Form} from "./components/Form";
import {List} from "./components/List";
import style from "./App.module.scss";
import { Stopwatch } from "./components/Stopwatch";
import { useState } from "react";

function App() {

  const [tasks, setTasks] = useState( [
        {
            title: "VueJs",
            time: "01:00:00"
        }
      ]
  );

  function addNewTask({title, time} : {title: string, time: string}) {
    const taskState = tasks;
    setTasks([...taskState, {title, time}]);
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
