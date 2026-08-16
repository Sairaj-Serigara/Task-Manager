import API from "../services/api";

function TaskList({ tasks, fetchTasks }) {

  const deleteTask = async (id) => {

    if (!window.confirm("Delete this task?")) return;

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
  return (
    <div>

      <h3 className="mb-3">Tasks</h3>

      {tasks.length === 0 ? (
        <p>No tasks yet...</p>
      ) : (
        tasks.map((task) => (
          <div className="card mb-3" key={task._id}>
            <div className="card-body">

              <h5>{task.title}</h5>

              <p>{task.description}</p>

              <p>
                <strong>Priority:</strong>

                <span
                    className={`badge ms-2 ${
                    task.priority === "High"
                        ? "bg-danger"
                        : task.priority === "Medium"
                        ? "bg-warning text-dark"
                        : "bg-success"
                    }`}
                >
                    {task.priority}
                </span>
                </p>

                <p>
                <strong>Status:</strong>

                <span
                    className={`badge ms-2 ${
                    task.status === "Completed"
                        ? "bg-success"
                        : "bg-secondary"
                    }`}
                >
                    {task.status}
                </span>
                </p>

              <div className="d-flex gap-2">

        <button
            className="btn btn-success"
            onClick={() => completeTask(task._id)}
        >
            Complete
        </button>

        <button
            className="btn btn-danger"
            onClick={() => deleteTask(task._id)}
        >
            Delete
        </button>

        </div>

                    </div>
                </div>
                ))
            )}

            </div>
        );
    }

    export default TaskList;