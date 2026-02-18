import { Check, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { showSuccess } from "../services/toast";

function ListTask({ listTask, onCompleteTask, onDeleteTask, onDeleteCompletedTasks }) {
    const navigate = useNavigate();

    function handleNavigateTask(task) {
        const queryParams = new URLSearchParams({
            id: task.id,
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
                            <button className="cursor-pointer bg-green-400 p-2 rounded-md" onClick={() => onCompleteTask(task.id)}>
                                <Check />
                            </button>
                        }
                        <button className="cursor-pointer bg-red-400 p-2 rounded-md" onClick={() => {onDeleteTask(task.id), showSuccess("Tarefa removida com sucesso!") }}>
                            <Trash2 />
                        </button>
                    </div>
                </div>
            ))}
            <div className="flex items-center justify-between">
                <div>
                    {listTask.filter(task => task.completed).length} de {listTask.length} tarefas concluídas.
                </div>
                <div className="rounded-md p-2 bg-green-400 cursor-pointer" onClick={() => {
                    onDeleteCompletedTasks(), 
                    showSuccess("Tarefas concluídas removidas com sucesso!")
                    }}>
                    Limpar Concluídas
                </div>
            </div>
        </div>
    )
}

export default ListTask;