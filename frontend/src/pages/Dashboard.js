import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

function Dashboard() {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);
  const [editTask, setEditTask] = useState(null);

 useEffect(() => {
    if (!localStorage.getItem("token")) navigate("/");
    fetchTasks();
  }, [navigate]);

  const fetchTasks = async () => {
    try {
      const res = await API.get("/tasks");
      setTasks(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

const completedCount = tasks.filter(t => t.status === "Completed").length;
const pendingCount = tasks.filter(t => t.status !== "Completed").length;

  return (
    <div className="min-h-screen bg-[#0f0f13] text-white">

      {/* Background blobs */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-violet-600 opacity-10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-indigo-500 opacity-10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10">

        {/* Navbar */}
        <header className="border-b border-white/10 bg-[#16161d]/80 backdrop-blur-md sticky top-0 z-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-violet-600 flex items-center justify-center shadow-lg shadow-violet-500/30">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <span className="font-bold text-white tracking-tight">TaskTable</span>
            </div>
            <button
              onClick={logout}
              className="flex items-center gap-2 text-sm text-white/40 hover:text-white/80 transition-colors px-3 py-1.5 rounded-lg hover:bg-white/5"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              Logout
            </button>
          </div>
        </header>

        <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-8">

          {/* Page title */}
          <div>
            <h1 className="text-2xl font-bold text-white tracking-tight">Dashboard</h1>
            <p className="text-sm text-white/40 mt-1">Manage and track all your tasks</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4">
            {[
              { label: "Total", value: tasks.length, color: "text-white" },
              { label: "Pending", value: pendingCount, color: "text-amber-400" },
              { label: "Completed", value: completedCount, color: "text-emerald-400" },
            ].map((stat) => (
              <div key={stat.label} className="bg-[#16161d] border border-white/10 rounded-2xl p-4 text-center">
                <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                <p className="text-xs text-white/40 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Task Form */}
          <TaskForm
            fetchTasks={fetchTasks}
            editTask={editTask}
            setEditTask={setEditTask}
          />

          {/* Task List */}
          <TaskList
            tasks={tasks}
            fetchTasks={fetchTasks}
            setEditTask={setEditTask}
          />
        </main>
      </div>
    </div>
  );
}

export default Dashboard;