<div className="card mb-3" key={task._id}>
  <div className="card-body">

    <h5>{task.title}</h5>

    <p>{task.description}</p>

    <p>
      <strong>Priority:</strong> {task.priority}
    </p>

    <p>
      <strong>Status:</strong> {task.status}
    </p>

    <button
      className="btn btn-danger"
      onClick={() => deleteTask(task._id)}
    >
      Delete
    </button>

  </div>
</div>