import { useSearchParams } from "react-router-dom";

function TaskPage() {
    const [searchParams] = useSearchParams();

    return (
        <div className='bg-blue-300 w-full min-h-screen flex flex-col gap-y-5 items-center pt-10'>
            <div className="bg-white w-125 flex flex-col gap-4 p-4 rounded">
                <h1 className="text-2xl font-bold text-center">{searchParams.get("title")}</h1>
                <p>{searchParams.get("description")}</p>
                <button className="bg-blue-500 text-white px-4 py-2 cursor-pointer rounded" onClick={() => window.history.back()}>Voltar</button>
            </div>
        </div>
    )
}

export default TaskPage;