import { useEffect, useState } from "react"
import {getAllTasks} from "../api/tasks.api";
import TaskCard from "./TaskCard";

const TasksList = () => {
    const [tasks, setTaks] = useState([]);

    useEffect(() => {

        async function loadTasks() {
            const res = await getAllTasks()
            setTaks(res.data);
        }
        loadTasks()

    }, []);

  return (
    
    <div className="grid grid-cols-3 gap-3">{tasks.map(task => (
      <TaskCard key = {task.id} task = {task}/>
    ))}</div>
  )
}

export default TasksList