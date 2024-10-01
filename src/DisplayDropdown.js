import React, { useState } from 'react';
import './App.css'; // Include necessary styles for dropdown

const DisplayDropdown = ({ grouping, sorting, onGroupingChange, onSortingChange }) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  // Function to toggle the visibility of the dropdowns
  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <div className="display-container">
      {/* Parent div named 'Display' */}
      <div className="display-button" onClick={toggleDropdown}>
        <span>Display</span> {/* This is the clickable button */}
      </div>

      {isDropdownVisible && (
        <div className="display-dropdown">
          {/* Grouping Dropdown */}
          <div className="dropdown">
            <label>Grouping:</label>
            <select value={grouping} onChange={(e) => onGroupingChange(e.target.value)}>
              <option value="status">Group by Status</option>
              <option value="user">Group by User</option>
              <option value="priority">Group by Priority</option>
            </select>
          </div>

          {/* Sorting Dropdown */}
          <div className="dropdown">
            <label>Sorting:</label>
            <select value={sorting} onChange={(e) => onSortingChange(e.target.value)}>
              <option value="priority">Sort by Priority</option>
              <option value="title">Sort by Title</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default DisplayDropdown;
