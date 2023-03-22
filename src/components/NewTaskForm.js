import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("Code");

  const categoriesList = categories.map((category) => {
    return <option key={category}>{category}</option>;
  });

  const handleNewChange = (e) => {
    setText(e.target.value);
  };

  const handleNewCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      text,
      category,
    };
    onTaskFormSubmit(newTask);
  };

  return (
    <form className="new-task-form" onSubmit={handleFormSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          onChange={handleNewChange}
          value={text}
        />
      </label>
      <label>
        Category
        <select name="category" onChange={handleNewCategory}>
          {categoriesList}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
