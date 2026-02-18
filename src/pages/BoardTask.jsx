import { useEffect, useState } from "react";
import AddTask from "../components/addTask";
import ListTask from "../components/listTask";


function BoardTask() {

    const [listTask, setListTask] = useState(
        JSON.parse(localStorage.getItem("listTask")) || []
    );

    useEffect(() => {
        localStorage.setItem("listTask", JSON.stringify(listTask));
    }, [listTask]);

    function addTask(name, description) {
        const newTask = {
            id: listTask.length + 1,
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

    return (
        <div className='bg-blue-300 w-full min-h-screen flex flex-col gap-y-5 items-center p-10'>
            <AddTask addTask={addTask} />
            <ListTask listTask={listTask} onCompleteTask={onCompleteTask} onDeleteTask={onDeleteTask} />
        </div>
    );
}

export default BoardTask;