import React from 'react';
import './KanbanCard.css';

const KanbanCard = ({ ticket }) => {
  return (
    <div className="kanban-card">
      <div className="card-header">
        <span className="card-id">{ticket.id}</span>
        <span className="user-avatar"></span>
      </div>
      <h4>{ticket.title}</h4>
      <p>{ticket.tag.join(', ')}</p>
    </div>
  );
};

export default KanbanCard;
