import { useEffect, useState } from "react";

const TaskForm = ({ addTask, editTask, updateTask }) => {

  const [task, setTask] = useState({
    title: "",
    description: "",
    dueDate: "",
    priority: "Low",
    status: "Pending",
  });

  useEffect(() => {
    if (editTask) {
      setTask(editTask);
    }
  }, [editTask]);

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!task.title || !task.description || !task.dueDate) {
      alert("Fill all fields");
      return;
    }

    if (editTask) {
      updateTask(task);
    } else {
      addTask({
        id: Date.now(),
        ...task,
      });
    }

    setTask({
      title: "",
      description: "",
      dueDate: "",
      priority: "Low",
      status: "Pending",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-2 rounded shadow mb-6 space-y-3m justify-centre flex flex-col gap-2 align-centre"
    >
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={task.title}
        onChange={handleChange}
        className="border p-2 rounded w-600px"
      />

      <textarea
        name="description"
        placeholder="Description"
        value={task.description}
        onChange={handleChange}
        className="border p-2 rounded w-600px"
      />

      <input
        type="date"
        name="dueDate"
        value={task.dueDate}
        onChange={handleChange}
        className="border p-2 rounded w-600px"
      />

      <select
        name="priority"
        value={task.priority}
        onChange={handleChange}
        className="border p-2 rounded w-600px"
      >
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>

      <button className="bg-blue-600 text-white px-4 py-2 rounded w-600px">
        {editTask ? "Update Task" : "Add Task"}
      </button>
    </form>
  );
};

export default TaskForm;