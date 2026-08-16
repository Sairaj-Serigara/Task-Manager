import { useState } from "react";
import API from "../services/api";

function TaskForm({ fetchTasks }) {
  const [task, setTask] = useState({
    title: "",
    description: "",
    priority: "Medium",
  });

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/tasks", {
        ...task,
        status: "Pending",
      });
      fetchTasks();
      alert("Task Added Successfully!");

      setTask({
        title: "",
        description: "",
        priority: "Medium",
      });

    } catch (error) {
      console.error(error);
      alert("Error adding task");
    }
  };

  return (
    <form className="card p-4 mb-4" onSubmit={handleSubmit}>

      <h4>Add Task</h4>

      <input
        type="text"
        name="title"
        placeholder="Task Title"
        className="form-control mb-3"
        value={task.title}
        onChange={handleChange}
        required
      />

      <textarea
        name="description"
        placeholder="Description"
        className="form-control mb-3"
        value={task.description}
        onChange={handleChange}
      />

      <select
        name="priority"
        className="form-select mb-3"
        value={task.priority}
        onChange={handleChange}
      >
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>

      <button className="btn btn-primary">
        Add Task
      </button>

    </form>
  );
}

export default TaskForm;