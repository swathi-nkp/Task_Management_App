const TaskList = ({
  tasks,
  deleteTask,
  editTask,
  toggleStatus,
}) => {
  return (
    <div className="space-y-4">

      {tasks.map((task) => (

        <div
          key={task.id}
          className="bg-white rounded shadow p-4"
        >
          <h2 className="text-xl font-bold">
            {task.title}
          </h2>

          <p>{task.description}</p>

          <p>Due: {task.dueDate}</p>

          <p>Priority: {task.priority}</p>

          <p>Status: {task.status}</p>

          <div className="flex gap-3 mt-4">

            <button
              onClick={() => editTask(task)}
              className="bg-yellow-500 text-white px-3 py-1 rounded"
            >
              Edit
            </button>

            <button
              onClick={() => deleteTask(task.id)}
              className="bg-red-600 text-white px-3 py-1 rounded"
            >
              Delete
            </button>

            <button
              onClick={() => toggleStatus(task.id)}
              className="bg-green-600 text-white px-3 py-1 rounded"
            >
              {task.status === "Pending"
                ? "Mark Completed"
                : "Mark Pending"}
            </button>

          </div>
        </div>

      ))}

    </div>
  );
};

export default TaskList;