import React from 'react';
import KanbanCard from './KanbanCard';
import './KanbanLane.css';

const KanbanLane = ({ groupKey, tickets, users, grouping }) => {
  const getLaneTitle = () => {
    if (grouping === 'user') {
      const user = users.find((user) => user.id === groupKey);
      return user ? user.name : 'Unknown User';
    }
    return groupKey;
  };

  return (
    <div className="kanban-lane">
      <h3>{getLaneTitle()}</h3>
      <div className="lane-cards">
        {tickets.map((ticket) => (
          <KanbanCard key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </div>
  );
};

export default KanbanLane;
