import { useEffect, useState } from "react";
import API from "./services/api";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const res = await API.get("/tasks");
      setTasks(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="app-wrapper">
      <div className="text-center mb-5">
        <h1>📋 Task Manager</h1>
        <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "1rem", marginBottom: "0" }}>
          Keep track of your tasks and stay productive
        </p>
      </div>

      <TaskForm fetchTasks={fetchTasks} />

      <TaskList tasks={tasks} fetchTasks={fetchTasks} />
    </div>
  );
}

export default App;