import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { showUpdated } from "../services/toast";

function TaskPage() {
    const [searchParams] = useSearchParams();
    const [description, setDescription] = useState("");
    const [changedDescription, setChangedDescription] = useState(false);

    const [listTask, setListTask] = useState(
        JSON.parse(localStorage.getItem("listTask")) || []
    );

    useEffect(() => {
        localStorage.setItem("listTask", JSON.stringify(listTask));
    }, [listTask]);

    function getTaskById(id) {
        return listTask.find((task) => task.id === id);
    }

    function onEditTask(id, description) {
        const updatedList = listTask.map((task) => {
            if (task.id === id) {
                return { ...task, description };
            }
            return task;
        })
        setListTask(updatedList);
    }

    return (
        <div className='bg-blue-300 w-full min-h-screen flex flex-col gap-y-5 items-center pt-10'>
            <div className="bg-white w-125 flex flex-col gap-4 p-4 rounded">
                <h1 className="text-2xl font-bold text-center">{getTaskById(searchParams.get("id"))?.name}</h1>
                <div className="flex flex-col gap-2">
                    <textarea
                        className="border border-blue-300 p-1.5 w-full h-50 text-justify resize-none overflow-x-hidden"
                        defaultValue={getTaskById(searchParams.get("id"))?.description}
                        onChange={(e) => {
                            setDescription(e.target.value),
                                setChangedDescription(true)
                        }}
                    />
                </div>
                {changedDescription ?
                    <button className="bg-green-500 text-white py-2 cursor-pointer rounded" onClick={() => {
                        onEditTask(searchParams.get("id"), description);
                        showUpdated("Descrição da tarefa atualizada com sucesso!");
                        setChangedDescription(false);
                    }}>Alterar descrição</button> :
                    <div className="bg-gray-400 text-white py-2 rounded text-center select-none">Sem modificações</div>
                }


                <button className="bg-blue-500 text-white py-2 cursor-pointer rounded" onClick={() => window.history.back()}>Voltar</button>
            </div>
        </div>
    )
}

export default TaskPage;