import React from "react";

export default function Searchbar({ setQuery }) {
  return (
    <div className="search-container">
      <i className="fa-solid fa-magnifying-glass"></i>
      <input
        type="text"
        placeholder="Search for a country..."
        onChange={(e) => {
          console.log(e.target.value);
          setQuery(e.target.value.toLowerCase().trim());
        }}
      />
    </div>
  );
}
