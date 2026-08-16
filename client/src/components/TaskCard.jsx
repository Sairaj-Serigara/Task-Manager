import { FaTrash, FaCheckCircle, FaEdit } from "react-icons/fa";

<div className="task-card mb-4" key={task._id}>
  <div className="card-body">

    <div className="d-flex justify-content-between align-items-center mb-3">
      <h4 className="fw-bold mb-0">{task.title}</h4>

      <span
        className={`badge rounded-pill ${
          task.priority === "High"
            ? "bg-danger"
            : task.priority === "Medium"
            ? "bg-warning text-dark"
            : "bg-success"
        }`}
      >
        {task.priority}
      </span>
    </div>

    <p className="text-secondary">
      {task.description || "No description provided"}
    </p>

    <div className="mb-3">
      <span
        className={`badge rounded-pill ${
          task.status === "Completed"
            ? "bg-success"
            : "bg-secondary"
        }`}
      >
        {task.status}
      </span>
    </div>

    <div className="d-flex gap-2">

      <button
        className="btn btn-warning btn-sm"
      >
        <FaEdit className="me-1" />
        Edit
      </button>

      <button
        className="btn btn-success btn-sm"
        onClick={() => completeTask(task._id)}
      >
        <FaCheckCircle className="me-1" />
        Complete
      </button>

      <button
        className="btn btn-danger btn-sm"
        onClick={() => deleteTask(task._id)}
      >
        <FaTrash className="me-1" />
        Delete
      </button>

    </div>

  </div>
</div>

