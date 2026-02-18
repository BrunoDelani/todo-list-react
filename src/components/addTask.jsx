import { useState } from "react";
import { toast } from "sonner";

function AddTask({ addTask }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    return (
        <div className="bg-white w-125 flex flex-col gap-4 p-4 rounded">
            <p className="text-center">Adicione uma nova tarefa</p>
            <input type="text" className="w-full p-2 border-b border-b-gray-400" placeholder="Nome da tarefa" value={title} onChange={(e) => setTitle(e.target.value)} />
            <input type="text" className="w-full p-2 border-b border-b-gray-400" placeholder="Descrição da tarefa" value={description} onChange={(e) => setDescription(e.target.value)} />
            <button className="bg-blue-500 text-white px-4 py-2 cursor-pointer rounded" onClick={() => {
                if (!title.trim() || !description.trim()) return toast.error("Preencha todos os campos", {
                    position: "top-center",
                    duration: 2000,
                    style: {
                        border: "1px solid #ef4444",
                        padding: "16px",
                        color: "#fff",
                        background: "#b91c1c",
                    },
                    iconTheme: {
                        primary: "#fff",
                        secondary: "#b91c1c",
                    },
                });

                addTask(title, description);
                setTitle('');
                setDescription('');
                toast.success("Tarefa adicionada com sucesso!", {
                    position: "top-center",
                    duration: 2000,
                    style: {
                        border: "1px solid #10b981",
                        padding: "16px",
                        color: "#fff",
                        background: "#10b981",
                    },
                    iconTheme: {
                        primary: "#fff",
                        secondary: "#10b981",
                    },
                });
            }}>Adicionar</button>
        </div>
    )
}

export default AddTask;