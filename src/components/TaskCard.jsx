import { useTasks } from "../context/TasksConstext";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

function TaskCard({ task }) {
  const { deletask } = useTasks();

  return (
    <div className="bg-[#1e1e1e] text-[#e0f7e9] w-full p-5 rounded-2xl shadow-md border-l-4 border-green-400 transition duration-300 hover:shadow-lg flex flex-col justify-between">
      <header className="mb-3">
        <h1 className="text-xl font-bold break-words">🧾 {task.title}</h1>
      </header>

      <p className="text-sm text-zinc-300 mb-2 break-words">
        {task.description}
      </p>

      <p className="text-xs text-green-400 mb-3">
        Fecha: {dayjs(task.date).utc().format("DD/MM/YYYY")}
      </p>

      <div className="flex flex-wrap gap-2 justify-start mt-auto">
        <button
          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm"
          onClick={() => deletask(task._id)}
        >
          Eliminar
        </button>
        <Link
          to={`/tasks/${task._id}`}
          className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-sm"
        >
          Editar
        </Link>
      </div>
    </div>
  );
}

export default TaskCard;
