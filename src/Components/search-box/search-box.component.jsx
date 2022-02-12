import React from "react";
import "./search-box.styles.css";

function Seachbox({ placeholder, handleChange }) {
  return (
    <input
      className="search"
      type="text"
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
}

export default Seachbox;
