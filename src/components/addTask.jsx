import { useState } from "react";
import { showError, showSuccess } from "../services/toast";

function AddTask({ addTask }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    return (
        <div className="bg-white w-125 flex flex-col gap-4 p-4 rounded">
            <p className="text-center">Adicione uma nova tarefa</p>
            <input type="text" className="w-full p-2 border-b border-b-gray-400" placeholder="Nome da tarefa" value={title} onChange={(e) => setTitle(e.target.value)} />
            <input type="text" className="w-full p-2 border-b border-b-gray-400" placeholder="Descrição da tarefa" value={description} onChange={(e) => setDescription(e.target.value)} />
            <button className="bg-blue-500 text-white px-4 py-2 cursor-pointer rounded" onClick={() => {
                if (!title.trim() || !description.trim()) return showError("Preencha todos os campos para adicionar uma nova tarefa.");

                addTask(title, description);
                setTitle('');
                setDescription('');
                showSuccess("Tarefa adicionada com sucesso!");
            }}>Adicionar</button>
        </div>
    )
}

export default AddTask;