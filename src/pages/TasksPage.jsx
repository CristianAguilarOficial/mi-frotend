// src/pages/TasksPage.jsx
import { useEffect } from "react";
import { useTasks } from "../context/TasksConstext";
import TaskCard from "../components/TaskCard";
import { TasksTour, ResetToursButton } from "../components/TasksTour";
import { NavLink } from "react-router-dom";

function TasksPage() {
  const { getTasks, tasks } = useTasks();

  useEffect(() => {
    getTasks();
  }, []);

  if (tasks.length === 0) {
    return (
      <>
        <div className="bg-zinc-900 py-4 px-4 flex justify-center sm:justify-start">
          <TasksTour />
          <ResetToursButton />
          <NavLink
            id="btn-create-task"
            to="/add-task"
            className="w-full sm:w-auto text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Añadir Nota
          </NavLink>
        </div>
        <div className="flex items-center justify-center min-h-screen bg-zinc-900 text-white">
          <h1 className="text-2xl font-bold">No tasks</h1>
        </div>
      </>
    );
  }

  return (
    <>
      {/* Botón Añadir Nota con diseño responsive */}
      <div className="bg-zinc-900 py-4 px-4 flex justify-center sm:justify-start">
        <NavLink
          id="btn-create-task"
          to="/add-task"
          className="w-full sm:w-auto text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Añadir Nota
        </NavLink>
      </div>

      <div className="bg-zinc-900 min-h-screen px-4 py-8">
        {/* Tour Component */}
        <TasksTour />

        {/* Botón para reiniciar tutorial */}
        <ResetToursButton />

        {/* Grid de tareas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 tasks-grid">
          {tasks.map((task) => (
            <TaskCard task={task} key={task._id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default TasksPage;
