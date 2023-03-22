import React from "react";
import Task from "./Task";

function TaskList({ tasks, taskDelete }) {
  const tasklist = tasks.map((task) => {
    return <Task key={task.text} {...task} taskDelete={taskDelete} />;
  });

  return (
    <div className="tasks">
      <ul>{tasklist}</ul>
    </div>
  );
}

export default TaskList;
