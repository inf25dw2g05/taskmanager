import { useEffect, useState } from "react";
import { getTasks } from "../api";

function Tasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function loadTasks() {
      const data = await getTasks();
      setTasks(data);
    }

    loadTasks();
  }, []);

  return (
    <div>
      <h2>Tasks</h2>

      {tasks.length === 0 ? (
        <p>No tasks found.</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <strong>{task.title}</strong> - {task.description}
              <br />
              Completed: {task.completed ? "Yes" : "No"}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Tasks;