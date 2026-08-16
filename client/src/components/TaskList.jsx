import API from "../services/api";
import { FaCheckCircle, FaTrash, FaUndoAlt } from "react-icons/fa";

function TaskList({ tasks, fetchTasks }) {
  const deleteTask = async (id) => {
    if (!window.confirm("Are you sure you want to delete this task?")) return;

    try {
      await API.delete(`/tasks/${id}`);
      fetchTasks();
    } catch (error) {
      console.log(error);
    }
  };

  const completeTask = async (id) => {
    try {
      await API.patch(`/tasks/${id}/complete`);
      fetchTasks();
    } catch (error) {
      console.log(error);
    }
  };

  const uncompleteTask = async (id) => {
    try {
      await API.patch(`/tasks/${id}/incomplete`);
      fetchTasks();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mt-5">
      <h2 className="text-center mb-4">
        📝 My Tasks
      </h2>

      {tasks.length === 0 ? (
        <div className="alert alert-light text-center">
          <p style={{ marginBottom: "0", color: "#4a5568", fontSize: "1.1rem" }}>
            ✨ No tasks yet. Create one to get started!
          </p>
        </div>
      ) : (
        <div>
          {tasks.map((task) => (
            <div className="card task-card" key={task._id}>
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <div style={{ flex: 1 }}>
                    <h4 style={{ 
                      color: "#1a202c", 
                      marginBottom: "0.5rem",
                      textDecoration: task.status === "Completed" ? "line-through" : "none",
                      opacity: task.status === "Completed" ? 0.6 : 1
                    }}>
                      {task.title}
                    </h4>
                  </div>

                  <span className={`priority ${task.priority.toLowerCase()}`}>
                    {task.priority}
                  </span>
                </div>

                {task.description && (
                  <p className="text-muted mb-3" style={{ color: "#4a5568", lineHeight: "1.6" }}>
                    {task.description}
                  </p>
                )}

                <div className="mb-3">
                  <span className={`badge rounded-pill ${
                    task.status === "Completed"
                      ? "bg-success"
                      : "bg-primary"
                  }`}>
                    {task.status === "Completed" ? "✓ Completed" : "⏳ Pending"}
                  </span>
                </div>

                <div className="d-flex gap-2 flex-wrap">
                  {task.status !== "Completed" && (
                    <button
                      className="btn btn-success btn-sm"
                      onClick={() => completeTask(task._id)}
                      title="Mark as complete"
                    >
                      <FaCheckCircle className="me-1" />
                      Complete
                    </button>
                  )}

                  {task.status === "Completed" && (
                    <button
                      className="btn btn-warning btn-sm"
                      onClick={() => uncompleteTask(task._id)}
                      title="Mark as not completed"
                    >
                      <FaUndoAlt className="me-1" />
                      Uncomplete
                    </button>
                  )}

                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteTask(task._id)}
                    title="Delete task"
                  >
                    <FaTrash className="me-1" />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default TaskList;