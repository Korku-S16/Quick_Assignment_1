import React, { useState, useEffect } from 'react';
import KanbanBoard from './KanbanBoard';
import DisplayDropdown from './DisplayDropdown'; // Import the DisplayDropdown component
import { fetchKanbanData } from './api';
import './App.css';

function App() {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [grouping, setGrouping] = useState(null); // Initially null
  const [sorting, setSorting] = useState(null); // Initially null

  useEffect(() => {
    const getData = async () => {
      if (grouping && sorting) { // Fetch data only if both grouping and sorting are selected
        try {
          const data = await fetchKanbanData();
          console.log(data);
          setTickets(data.tickets);
          setUsers(data.users);
        } catch (error) {
          console.error(error);
        }
      }
    };

    getData();
  }, [grouping, sorting]); // Dependency array includes grouping and sorting

  const handleGroupingChange = (newGrouping) => {
    setGrouping(newGrouping); // Update grouping state
  };

  const handleSortingChange = (newSorting) => {
    setSorting(newSorting); // Update sorting state
  };

  return (
    <div className="App">
      <header className="app-header">
        <h1>Kanban Board</h1>
        <DisplayDropdown 
          grouping={grouping}
          sorting={sorting}
          onGroupingChange={handleGroupingChange}
          onSortingChange={handleSortingChange}
        />
      </header>
      {grouping && sorting && ( // Render KanbanBoard only if both grouping and sorting are selected
        <KanbanBoard tickets={tickets} users={users} grouping={grouping} sorting={sorting} />
      )}
    </div>
  );
}

export default App;
