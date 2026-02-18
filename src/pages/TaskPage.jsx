import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

function TaskPage() {
    const [searchParams] = useSearchParams();

    const [listTask, setListTask] = useState(
        JSON.parse(localStorage.getItem("listTask")) || []
    );

    useEffect(() => {
        localStorage.setItem("listTask", JSON.stringify(listTask));
    }, [listTask]);

    function getTaskById(id) {
        return listTask.find((task) => task.id === id);
    }

    return (
        <div className='bg-blue-300 w-full min-h-screen flex flex-col gap-y-5 items-center pt-10'>
            <div className="bg-white w-125 flex flex-col gap-2 p-4 rounded">
                <h1 className="text-2xl font-bold">Título da Tarefa: {getTaskById(searchParams.get("id"))?.name}</h1>
                <p>Descrição:</p>
                <p>{getTaskById(searchParams.get("id"))?.description}</p>
                <button className="bg-blue-500 text-white px-4 py-2 cursor-pointer rounded" onClick={() => window.history.back()}>Voltar</button>
            </div>
        </div>
    )
}

export default TaskPage;