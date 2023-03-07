import React from "react";

function SearchableFoodList({ migraineFoodList, search, onSearchChange }) {
  return (
    <>
      <h1>Food and Ingredients Containing Known Potential Migraine Triggers</h1>
      <div className="searchbar">
        <label htmlFor="search">Search Food:</label>
        <input
          type="text"
          id="search"
          placeholder="Type a name to search..."
          onChange={(e) => onSearchChange(e.target.value)}
          value={search}
        />
      </div>
      {migraineFoodList.map((food) => {
        return (
          <p>
            {food.name + " "}
            {"(" + food.chemicals + ")"}
          </p>
        );
      })}
    </>
  );
}

export default SearchableFoodList;
