import { useEffect } from "react";
import { useTasks } from "../context/TasksConstext";
import TaskCard from "../components/TaskCard";

function TasksPage() {
  const { getTasks, tasks } = useTasks();

  useEffect(() => {
    getTasks();
  }, []);

  if (tasks.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-zinc-900 text-white">
        <h1 className="text-2xl font-bold">No tasks</h1>
      </div>
    );
  }

  return (
    <div className="bg-zinc-900 min-h-screen px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {tasks.map((task) => (
          <TaskCard task={task} key={task._id} />
        ))}
      </div>
    </div>
  );
}

export default TasksPage;
