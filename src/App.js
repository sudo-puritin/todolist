import React, { useState } from "react";
import "./style.css";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import AddTaskForm from "./components/AddTaskForm";

const App = () => {
  const [tasks, setTasks] = useState([
    { id: "task-1", title: "Task 1", status: 0 },
    { id: "task-2", title: "Task 2", status: 0 },
  ]);
  const [showIncompletely, setShowIncompletely] = useState();
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask) {
      const task = {
        id: Date.now(),
        title: newTask,
        status: 0,
      };
      setTasks([...tasks, task]);
    }
  };
  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };
  const setTaskStatus = (taskId, status) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, status: status ? 1 : 0 };
        }
        return task;
      })
    );
  };
  const removeTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="container">
      <Header title="Todo List" subTitle="Get one item done at a time" />
      <TaskList
        tasks={tasks}
        showIncompletely={showIncompletely}
        setTaskStatus={setTaskStatus}
        removeTask={removeTask}
        setShowIncompletely={setShowIncompletely}
      />
      <AddTaskForm
        handleSubmit={handleSubmit}
        newTask={newTask}
        handleInputChange={handleInputChange}
      />
    </div>
  );
};

export default App;
