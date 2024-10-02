import React, { useState } from 'react';
import './DisplayDropdown.css'; // Include necessary styles for dropdown

// Add the icons here
const DisplayIcon = process.env.PUBLIC_URL + '/assets/Display.svg';
const DownIcon = process.env.PUBLIC_URL + '/assets/down.svg';

const DisplayDropdown = ({ grouping, sorting, onGroupingChange, onSortingChange }) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  // Function to toggle the visibility of the dropdowns
  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <div className="display-container">
      {/* Display Button with Icon */}
      <div className="display-button" onClick={toggleDropdown}>
        <img src={DisplayIcon} alt="Display Icon" className="display-icon" />
        <span>Display</span>
        <img src={DownIcon} alt="Down Arrow" className="down-icon" />
      </div>

      {isDropdownVisible && (
        <div className="display-dropdown">
          {/* Grouping Dropdown */}
          <div className="dropdown">
            <label>Grouping:</label>
            <select
              value={grouping}
              onChange={(e) => onGroupingChange(e.target.value)}
              style={{ background: `url(${DownIcon}) no-repeat right 8px center`, backgroundSize: '12px' }}
            >
              <option value="status">Group by Status</option>
              <option value="user">Group by User</option>
              <option value="priority">Group by Priority</option>
            </select>
          </div>

          {/* Sorting Dropdown */}
          <div className="dropdown">
            <label>Sorting:</label>
            <select
              value={sorting}
              onChange={(e) => onSortingChange(e.target.value)}
              style={{ background: `url(${DownIcon}) no-repeat right 8px center`, backgroundSize: '12px',marginLeft:'12px' }}
            >
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
