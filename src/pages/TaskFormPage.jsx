import { useForm } from "react-hook-form";
import { useTasks } from "../context/TasksConstext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

function TaskFormPage() {
  const { register, handleSubmit, setValue } = useForm();
  const { createTask, getTask, updateTask } = useTasks();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    if (params.id) {
      async function loadTask() {
        const task = await getTask(params.id);
        setValue("title", task.title);
        setValue("description", task.description);
        setValue("date", dayjs(task.date).utc().format("YYYY-MM-DD"));
      }
      loadTask();
    }
  }, []);

  const onSubmit = handleSubmit((data) => {
    const dataValid = {
      ...data,
      date: data.date ? dayjs.utc(data.date).format() : dayjs.utc().format(),
    };

    if (params.id) {
      updateTask(params.id, dataValid);
    } else {
      createTask(dataValid);
    }
    navigate("/tasks");
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-zinc-900">
      <div className="bg-zinc-800 border-2 border-green-500 max-w-md w-full p-10 rounded-md shadow-lg">
        <h1 className="text-3xl font-bold text-white text-center mb-6">
          {params.id ? "Editar Tarea" : "Crear Tarea"}
        </h1>
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label htmlFor="title" className="text-white block mb-1">
              Título
            </label>
            <input
              type="text"
              placeholder="Nombre de la tarea"
              {...register("title", { required: true })}
              className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md"
              autoFocus
            />
          </div>

          <div>
            <label htmlFor="description" className="text-white block mb-1">
              Descripción
            </label>
            <textarea
              rows="3"
              placeholder="Describe la tarea"
              {...register("description", { required: true })}
              className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md"
            ></textarea>
          </div>

          <div>
            <label htmlFor="date" className="text-white block mb-1">
              Fecha
            </label>
            <input
              type="date"
              {...register("date")}
              className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 transition-colors text-white px-4 py-2 rounded-md font-semibold"
          >
            {params.id ? "Guardar Cambios" : "Crear Tarea"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default TaskFormPage;
