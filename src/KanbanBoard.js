import React from 'react';
import KanbanLane from './KanbanLane';
import './KanbanBoard.css';

const KanbanBoard = ({ tickets, users, grouping, sorting }) => {
  const groupTickets = (tickets, grouping) => {
    const groups = {};

    tickets.forEach((ticket) => {
      const groupKey = grouping === 'user' ? ticket.userId : ticket[grouping];
      if (!groups[groupKey]) groups[groupKey] = [];
      groups[groupKey].push(ticket);
    });

    // Sort by priority or title
    Object.keys(groups).forEach((key) => {
      groups[key].sort((a, b) => {
        if (sorting === 'priority') return b.priority - a.priority;
        if (sorting === 'title') return a.title.localeCompare(b.title);
        return 0;
      });
    });

    return groups;
  };

  const groupedTickets = groupTickets(tickets, grouping);

  return (
    <div className="kanban-board">
      {Object.keys(groupedTickets).map((groupKey) => (
        <KanbanLane key={groupKey} groupKey={groupKey} tickets={groupedTickets[groupKey]} users={users} grouping={grouping} />
      ))}
    </div>
  );
};

export default KanbanBoard;
