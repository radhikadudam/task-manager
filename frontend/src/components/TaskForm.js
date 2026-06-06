import { useState, useEffect } from "react";
import API from "../services/api";

function TaskForm({ fetchTasks, editTask, setEditTask }) {
  const [task, setTask] = useState({ title: "", description: "" });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (editTask) {
      setTask({ title: editTask.title, description: editTask.description });
    } else {
      setTask({ title: "", description: "" });
    }
  }, [editTask]);

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (editTask) {
        await API.put(`/tasks/${editTask._id}`, task);
        setEditTask(null);
      } else {
        await API.post("/tasks", task);
      }
      setTask({ title: "", description: "" });
      fetchTasks();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setEditTask(null);
    setTask({ title: "", description: "" });
  };

  return (
    <div className="bg-[#16161d] border border-white/10 rounded-2xl p-6">
      <h2 className="text-sm font-semibold text-white/60 uppercase tracking-widest mb-4">
        {editTask ? "✏️ Edit Task" : "＋ New Task"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-1">
          <label className="text-xs font-medium text-white/40 uppercase tracking-widest">Title</label>
          <input
            type="text"
            name="title"
            placeholder="What needs to be done?"
            value={task.title}
            onChange={handleChange}
            required
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 text-sm focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all duration-200"
          />
        </div>

        <div className="space-y-1">
          <label className="text-xs font-medium text-white/40 uppercase tracking-widest">Description</label>
          <textarea
            name="description"
            placeholder="Add more details (optional)"
            value={task.description}
            onChange={handleChange}
            rows={3}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 text-sm focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all duration-200 resize-none"
          />
        </div>

        <div className="flex gap-3 pt-1">
          <button
            type="submit"
            disabled={loading}
            className="flex-1 bg-violet-600 hover:bg-violet-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-2.5 rounded-xl transition-all duration-200 shadow-lg shadow-violet-500/20 hover:shadow-violet-500/40 hover:-translate-y-0.5 active:translate-y-0 text-sm"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                </svg>
                {editTask ? "Updating..." : "Adding..."}
              </span>
            ) : editTask ? "Update Task" : "Add Task"}
          </button>

          {editTask && (
            <button
              type="button"
              onClick={handleCancel}
              className="px-4 py-2.5 rounded-xl border border-white/10 text-white/50 hover:text-white hover:border-white/20 transition-all duration-200 text-sm"
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default TaskForm;