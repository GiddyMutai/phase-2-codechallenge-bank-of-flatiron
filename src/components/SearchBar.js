import React from "react";

function SearchBar({onSearchChange}) {
  return (
    <form id="search-form">
      <input
        type="text"
        id="search-form"
        placeholder="Search by Description"
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default SearchBar;
