import React from "react";

function Task({ text, category, taskDelete }) {
  const handleClick = () => {
    taskDelete(text);
  };

  return (
    <div className="task">
      <li className="label">{category}</li>
      <span className="text">{text}</span>
      <button className="delete" onClick={handleClick}>
        X
      </button>
    </div>
  );
}

export default Task;
