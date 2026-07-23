import { useEffect, useState } from "react";
import TaskForm from "../components/TaskForm";
import TaskCard from "../components/TaskCard";
import SearchFilter from "../components/SearchFilter";

const Dashboard = () => {
 
  const [tasks, setTasks] = useState([]);  // Tasks
  const [editTask, setEditTask] = useState(null);// Edit Task
  const [search, setSearch] = useState("");   // Search
  const [statusFilter, setStatusFilter] = useState("All");  // Filters
  const [priorityFilter, setPriorityFilter] = useState("All"); 
  const [sortBy, setSortBy] = useState("");  // Sort

  // Load tasks from Local Storage
  useEffect(() => {
    const savedTasks =
      JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);

  // Save tasks to Local Storage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Dashboard Cards
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(
    (task) => task.status === "Completed"
  ).length;

  const pendingTasks = tasks.filter(
    (task) => task.status === "Pending"
  ).length;

  const highPriorityTasks = tasks.filter(
    (task) => task.priority === "High"
  ).length;


  // Add Task
  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  // Update Task
  const updateTask = (updatedTask) => {
    setTasks(
      tasks.map((task) =>
        task.id === updatedTask.id ? updatedTask : task
      )
    );

    setEditTask(null);
  };

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Status
  const toggleStatus = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              status:
                task.status === "Pending"
                  ? "Completed"
                  : "Pending",
            }
          : task
      )
    );
  };

  
  // Search + Filter + Sort
  const filteredTasks = [...tasks]
    .filter((task) =>
      task.title.toLowerCase().includes(search.toLowerCase())
    )
    .filter((task) =>
      statusFilter === "All"
        ? true
        : task.status === statusFilter
    )
    .filter((task) =>
      priorityFilter === "All"
        ? true
        : task.priority === priorityFilter
    )
    .sort((a, b) => {
      if (sortBy === "title") {
        return a.title.localeCompare(b.title);
      }

      if (sortBy === "dueDate") {
        return new Date(a.dueDate) - new Date(b.dueDate);
      }

      if (sortBy === "priority") {
        const order = {
          High: 3,
          Medium: 2,
          Low: 1,
        };

        return order[b.priority] - order[a.priority];
      }

      return 0;
    });

      return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-8">
          Task Management Dashboard
        </h1>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">

          <div className="bg-blue-500 text-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold">Total Tasks</h2>
            <p className="text-4xl font-bold mt-2">
              {totalTasks}
            </p>
          </div>

          <div className="bg-green-500 text-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold">Completed</h2>
            <p className="text-4xl font-bold mt-2">
              {completedTasks}
            </p>
          </div>

          <div className="bg-yellow-500 text-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold">Pending</h2>
            <p className="text-4xl font-bold mt-2">
              {pendingTasks}
            </p>
          </div>

          <div className="bg-red-500 text-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold">High Priority</h2>
            <p className="text-4xl font-bold mt-2">
              {highPriorityTasks}
            </p>
          </div>

        </div>

        {/* Search / Filter / Sort */}
        <SearchFilter
          search={search}
          setSearch={setSearch}
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
          priorityFilter={priorityFilter}
          setPriorityFilter={setPriorityFilter}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />

       <div className="flex justify-center my-8">
        <div className="w-full max-w-2xl">
         <TaskForm
          addTask={addTask}
         editTask={editTask}
         updateTask={updateTask}
        />
       </div>
        </div>
        {/* Task List */}
        <div className="mt-8">

          <h2 className="text-2xl font-bold mb-5">
            Task List
          </h2>

          {filteredTasks.length === 0 ? (
            <div className="bg-white rounded-lg shadow p-6 text-center">
              <p className="text-gray-500 text-lg">
                No Tasks Found
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

              {filteredTasks.map((task) => (
                <TaskCard
                  key={task.id}
                  task={task}
                  deleteTask={deleteTask}
                  editTask={setEditTask}
                  toggleStatus={toggleStatus}
                />
              ))}

            </div>
          )}

        </div>

      </div>
    </div>
  );
};

export default Dashboard;