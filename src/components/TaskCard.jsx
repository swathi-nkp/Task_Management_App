const TaskCard = ({ task, deleteTask, editTask, toggleStatus }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-5 border">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-xl font-bold">{task.title}</h2>

        <span
          className={`px-3 py-1 rounded-full text-sm font-semibold ${
            task.priority === "High"
              ? "bg-red-100 text-red-600"
              : task.priority === "Medium"
              ? "bg-yellow-100 text-yellow-700"
              : "bg-green-100 text-green-700"
          }`}
        >
          {task.priority}
        </span>
      </div>

      <p className="text-gray-600 mb-3">{task.description}</p>

      <div className="space-y-1 text-sm">
        <p>
          <strong>Due Date:</strong> {task.dueDate}
        </p>

        <p>
          <strong>Status:</strong>

          <span
            className={`ml-2 font-semibold ${
              task.status === "Completed"
                ? "text-green-600"
                : "text-orange-500"
            }`}
          >
            {task.status}
          </span>
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mt-5">
        <button
          onClick={() => editTask(task)}
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-2 rounded"
        >
          Edit
        </button>

        <button
          onClick={() => deleteTask(task.id)}
          className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded"
        >
          Delete
        </button>

        <button
          onClick={() => toggleStatus(task.id)}
          className={`px-3 py-2 rounded text-white ${
            task.status === "Pending"
              ? "bg-green-600 hover:bg-green-700"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {task.status === "Pending"
            ? "Mark Completed"
            : "Mark Pending"}
        </button>
      </div>
    </div>
  );
};

export default TaskCard;