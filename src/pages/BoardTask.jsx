import { useEffect, useState } from "react";
import AddTask from "../components/addTask";
import ListTask from "../components/listTask";
import { v4 as uuidv4 } from 'uuid';


function BoardTask() {

    const [listTask, setListTask] = useState(
        JSON.parse(localStorage.getItem("listTask")) || []
    );

    useEffect(() => {
        localStorage.setItem("listTask", JSON.stringify(listTask));
    }, [listTask]);

    function addTask(name, description) {
        const newTask = {
            id: uuidv4(),
            name,
            description,
            completed: false,
        };
        setListTask([...listTask, newTask]);
    }

    function onCompleteTask(id) {
        const updatedList = listTask.map((task) => {
            if (task.id === id) {
                return { ...task, completed: !task.completed };
            }
            return task;
        })
        setListTask(updatedList);
    }

    function onDeleteTask(id) {
        const updatedList = listTask.filter((task) => task.id !== id);
        setListTask(updatedList);
    }

    function onDeleteCompletedTasks() {
        const updatedList = listTask.filter((task) => !task.completed);
        setListTask(updatedList);
    }

    return (
        <div className='bg-blue-300 w-full min-h-screen flex flex-col gap-y-5 items-center p-10'>
            <AddTask addTask={addTask} />
            <ListTask listTask={listTask} onCompleteTask={onCompleteTask} onDeleteTask={onDeleteTask} onDeleteCompletedTasks={onDeleteCompletedTasks} />
        </div>
    );
}

export default BoardTask;