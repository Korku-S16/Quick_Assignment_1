import React, { useState, useEffect } from 'react';
import KanbanBoard from './KanbanBoard';
import DisplayDropdown from './DisplayDropdown'; // Import the DisplayDropdown component
import { fetchKanbanData } from './api';
import './App.css';

function App() {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [grouping, setGrouping] = useState('status'); // Default grouping by status
  const [sorting, setSorting] = useState('priority'); // Default sorting by priority

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchKanbanData();
        setTickets(data.tickets);
        setUsers(data.users);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);

  const handleGroupingChange = (newGrouping) => setGrouping(newGrouping);
  const handleSortingChange = (newSorting) => setSorting(newSorting);

  return (
    <div className="App">
      <header>
        <h1>Kanban Board</h1>
      </header>
      <DisplayDropdown
        grouping={grouping}
        sorting={sorting}
        onGroupingChange={handleGroupingChange}
        onSortingChange={handleSortingChange}
      />
      <KanbanBoard tickets={tickets} users={users} grouping={grouping} sorting={sorting} />
    </div>
  );
}

export default App;
