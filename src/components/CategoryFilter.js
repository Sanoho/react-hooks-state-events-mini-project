import React from "react";

function CategoryFilter({ categories, categoryFilter, setCategoryFilter }) {
  const categoryList = categories.map((category) => {
    return (
      <button
        onClick={() => setCategoryFilter(category)}
        className={category === categoryFilter ? "selected" : null}
        key={category}
      >
        {category}
      </button>
    );
  });

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryList}
    </div>
  );
}

export default CategoryFilter;
