import { createContext, useContext, useState } from "react";
import {
  createTaskRequest,
  getTasksRequest,
  deleteTaskRequest,
  getTaskRequest,
  updateTaskRequest,
} from "../api/tasks";

const TasksContext = createContext();

export const useTasks = () => {
  const context = useContext(TasksContext);

  if (!context) {
    throw new Error("useTasks must be used within a TasksProvider");
  }

  return context;
};

export function TasksProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  const getTasks = async (task) => {
    try {
      const res = await getTasksRequest(task);
      setTasks(res.data);
    } catch (error) {
      console.error(error);
    }
  };
  const createTask = async (task) => {
    try {
      const res = await createTaskRequest(task);
      // Volver a cargar todas las tareas
      getTasks();
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };
  const deletask = async (id) => {
    try {
      const res = await deleteTaskRequest(id);
      if (res.status == 204) setTasks(tasks.filter((task) => task._id !== id));
    } catch (error) {
      console.log(error);
    }
  };
  const getTask = async (id) => {
    try {
      const res = await getTaskRequest(id);
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };
  const updateTask = async (id, task) => {
    try {
      const res = await updateTaskRequest(id, task);
      // Actualizar la tarea en el estado local
      setTasks(tasks.map((t) => (t._id === id ? res.data : t)));
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <TasksContext.Provider
      value={{
        tasks,
        createTask,
        getTasks,
        deletask,
        getTask,
        updateTask,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
}
