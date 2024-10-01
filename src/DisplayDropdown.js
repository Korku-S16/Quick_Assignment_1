import React from 'react';
import './DisplayDropdown.css';

const DisplayDropdown = ({ grouping, sorting, onGroupingChange, onSortingChange }) => {
  return (
    <div className="display-dropdown">
      <select value={grouping} onChange={(e) => onGroupingChange(e.target.value)}>
        <option value="status">Group by Status</option>
        <option value="user">Group by User</option>
        <option value="priority">Group by Priority</option>
      </select>

      <select value={sorting} onChange={(e) => onSortingChange(e.target.value)}>
        <option value="priority">Sort by Priority</option>
        <option value="title">Sort by Title</option>
      </select>
    </div>
  );
};

export default DisplayDropdown;
