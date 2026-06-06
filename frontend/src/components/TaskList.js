import API from "../services/api";

function TaskList({ tasks, fetchTasks, setEditTask }) {

  const handleDelete = async (id) => {
    try {
      await API.delete(`/tasks/${id}`);
      fetchTasks();
    } catch (error) {
      console.log(error);
    }
  };

  const handleToggle = async (id) => {
    try {
      await API.patch(`/tasks/${id}/toggle`);
      fetchTasks();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="space-y-3">
      <h2 className="text-sm font-semibold text-white/60 uppercase tracking-widest">
        Your Tasks
      </h2>

      {tasks.length === 0 ? (
        <div className="bg-[#16161d] border border-white/10 rounded-2xl p-12 text-center">
          <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mx-auto mb-3">
            <svg className="w-6 h-6 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
          <p className="text-white/30 text-sm">No tasks yet. Add one above!</p>
        </div>
      ) : (
        <div className="space-y-3">
          {tasks.map((task) => {
            const isCompleted = task.status === "Completed";
            return (
              <div
                key={task._id}
                className={`bg-[#16161d] border rounded-2xl p-5 transition-all duration-200 group
                  ${isCompleted ? "border-emerald-500/20" : "border-white/10 hover:border-white/20"}`}
              >
                <div className="flex items-start justify-between gap-4">

                  {/* Left: content */}
                  <div className="flex items-start gap-3 flex-1 min-w-0">
                    {/* Toggle checkbox */}
                    <button
                      onClick={() => handleToggle(task._id)}
                      className={`mt-0.5 w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-all duration-200
                        ${isCompleted
                          ? "bg-emerald-500 border-emerald-500"
                          : "border-white/20 hover:border-violet-400"}`}
                    >
                      {isCompleted && (
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </button>

                    <div className="flex-1 min-w-0">
                      <h3 className={`font-medium text-sm leading-snug truncate transition-all
                        ${isCompleted ? "line-through text-white/30" : "text-white"}`}>
                        {task.title}
                      </h3>
                      {task.description && (
                        <p className={`text-xs mt-1 leading-relaxed line-clamp-2
                          ${isCompleted ? "text-white/20" : "text-white/40"}`}>
                          {task.description}
                        </p>
                      )}

                      {/* Status badge */}
                      <span className={`inline-flex items-center gap-1 mt-2 text-xs px-2 py-0.5 rounded-full font-medium
                        ${isCompleted
                          ? "bg-emerald-500/10 text-emerald-400"
                          : "bg-amber-500/10 text-amber-400"}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${isCompleted ? "bg-emerald-400" : "bg-amber-400"}`} />
                       {isCompleted ? "Completed" : "Pending"}
                      </span>
                    </div>
                  </div>

                  {/* Right: actions */}
                  <div className="flex items-center gap-2 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <button
                      onClick={() => setEditTask(task)}
                      className="p-2 rounded-lg text-white/30 hover:text-white hover:bg-white/10 transition-all duration-150"
                      title="Edit"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </button>

                    <button
                      onClick={() => handleDelete(task._id)}
                      className="p-2 rounded-lg text-white/30 hover:text-red-400 hover:bg-red-500/10 transition-all duration-150"
                      title="Delete"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default TaskList;