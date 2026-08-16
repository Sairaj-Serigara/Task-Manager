import { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import API from "../services/api";

function TaskForm({ fetchTasks = () => {} }) {
    const [task, setTask] = useState({
        title: "",
        description: "",
        priority: "Medium",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setTask({
            ...task,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!task.title.trim()) {
            alert("Please enter a task title");
            return;
        }

        try {
            setLoading(true);
            await API.post("/tasks", {
                ...task,
                status: "Pending",
            });

            fetchTasks();

            setTask({
                title: "",
                description: "",
                priority: "Medium",
            });
        } catch (error) {
            console.error(error);
            alert("Error adding task. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form className="glass-card" onSubmit={handleSubmit}>
            <h3 className="text-center mb-4" style={{ color: "#2d3748", fontSize: "1.5rem" }}>
                <FaPlusCircle className="me-2" style={{ color: "#667eea" }} />
                Create a New Task
            </h3>

            <div className="mb-4">
                <label className="form-label">Task Title</label>
                <input
                    type="text"
                    name="title"
                    placeholder="Enter task title..."
                    className="form-control modern-input"
                    value={task.title}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="mb-4">
                <label className="form-label">Description</label>
                <textarea
                    rows="4"
                    name="description"
                    placeholder="Enter task description (optional)..."
                    className="form-control modern-input"
                    value={task.description}
                    onChange={handleChange}
                ></textarea>
            </div>

            <div className="mb-4">
                <label className="form-label">Priority Level</label>
                <select
                    name="priority"
                    className="form-select modern-input"
                    value={task.priority}
                    onChange={handleChange}
                >
                    <option value="Low">🟢 Low Priority</option>
                    <option value="Medium">🟡 Medium Priority</option>
                    <option value="High">🔴 High Priority</option>
                </select>
            </div>

            <button 
                type="submit"
                className="btn modern-btn w-100" 
                disabled={loading}
            >
                <FaPlusCircle className="me-2" />
                {loading ? "Creating..." : "Create Task"}
            </button>
        </form>
    );
}

export default TaskForm;