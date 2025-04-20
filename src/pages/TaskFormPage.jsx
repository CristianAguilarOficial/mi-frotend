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
        if (params.id) {
          const task = await getTask(params.id);
          setValue("title", task.title);
          setValue("description", task.description);
          setValue("date", dayjs(task.date).utc().format("YYYY-MM-DD"));
        }
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
    <div className="bg-zinc-800 w-full h-screen flex items-center justify-center">
      <div className="bg-zinc-900 p-2 rounded-md w-96">
        <h1 className="text-cyan-50 text-center ">crear tu tarea</h1>
        <form onSubmit={onSubmit}>
          <label htmlFor="title">title</label>
          <input
            type="text"
            placeholder="Task Name"
            {...register("title")}
            className="w-full bg-zinc-700 text-white px-4 py2  my-2 rounded-md"
            autoFocus
          />
          <label htmlFor="description">description</label>
          <textarea
            className="w-full bg-zinc-700 text-white px-4 py-2 my-2 rounded-md"
            rows="3"
            placeholder="Task Description"
            {...register("description")}
          ></textarea>
          <label htmlFor="date">Date</label>
          <input
            type="date"
            {...register("date")}
            className="w-full bg-zinc-700 text-white px-4 py-2 my-2 rounded-md"
          />
          <button className="bg-cyan-500 w-full p-2 rounded-md hover:bg-cyan-600 transition-colors">
            save
          </button>
        </form>
      </div>
    </div>
  );
}
export default TaskFormPage;
