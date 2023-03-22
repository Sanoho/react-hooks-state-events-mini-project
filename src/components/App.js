import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [tasks, setTasks] = useState(TASKS);

  const taskToDisplay = tasks.filter(
    (task) => categoryFilter === "All" || task.category === categoryFilter
  );

  const taskDelete = (deletedTask) => {
    setTasks(tasks.filter((task) => task.text !== deletedTask));
  };

  const formCategories = CATEGORIES.filter((category) => {
    return category !== "All";
  });

  const handleAddNewTask = (newTask) => {
    const newTasks = [...tasks, newTask];
    setTasks(newTasks);
  };

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        categoryFilter={categoryFilter}
        setCategoryFilter={setCategoryFilter}
      />
      <NewTaskForm
        categories={formCategories}
        onTaskFormSubmit={handleAddNewTask}
      />
      <TaskList tasks={taskToDisplay} taskDelete={taskDelete} />
    </div>
  );
}

export default App;
