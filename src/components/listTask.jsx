import { Check, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

function ListTask({ listTask, onCompleteTask, onDeleteTask }) {
    const navigate = useNavigate();

    function handleNavigateTask(task) {
        const queryParams = new URLSearchParams({
            title: task.name,
            description: task.description,
        }).toString();
        navigate(`/tasks?${queryParams}`)
    }   

    return (
        <div className="bg-white w-125 flex flex-col gap-4 p-4 rounded">
            <p className="text-center">Lista de tarefas</p>
            {listTask.map((task) => (
                <div key={task.id} className="flex justify-between items-center gap-x-2.5">
                    <div className="flex bg-blue-200 truncate w-full p-2 rounded cursor-pointer" onClick={() => {
                        handleNavigateTask(task)
                    }
                    }
                    >
                        {task.completed ?
                            <p className="font-bold line-through">{task.name}</p> :
                            <p className="font-bold">{task.name}</p>
                        }
                    </div>
                    <div className="flex gap-x-2.5 ">
                        {!task.completed &&
                            <button className="cursor-pointer bg-blue-200 p-2 rounded-md" onClick={() => onCompleteTask(task.id)}>
                                <Check />
                            </button>
                        }
                        <button className="cursor-pointer bg-blue-200 p-2 rounded-md" onClick={() => onDeleteTask(task.id)}>
                            <Trash2 />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ListTask;