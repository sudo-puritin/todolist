import React from "react";
import TaskItem from "./TaskItem";

function TaskList({
  tasks,
  showIncompletely,
  setTaskStatus,
  removeTask,
  setShowIncompletely,
}) {
  return (
    <>
      <ul className="task-list">
        {tasks
          .filter((task) => (showIncompletely ? task.status !== 1 : true))
          .map((task) => (
            <TaskItem
              task={task}
              setTaskStatus={setTaskStatus}
              removeTask={removeTask}
            />
          ))}
      </ul>
      <div className="filter-wrapper">
        <label htmlFor="filter" className="filter-label">
          Show incompletely tasks only
        </label>
        <input
          type="checkbox"
          id="filter"
          checked={showIncompletely}
          onChange={(e) => setShowIncompletely(e.target.checked)}
        />
      </div>
    </>
  );
}

export default TaskList;
