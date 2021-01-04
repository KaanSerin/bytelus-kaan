import React from 'react';
import InteractiveCard from './InteractiveCard/InteractiveCard';

const Grid = ({ activeCards }) => {
  return (
    <div
      style={{
        width: '1050px',
        height: '641px',
      }}
    >
      {activeCards.map((card) => (
        <InteractiveCard key={card.id} card={card} />
      ))}
    </div>
  );
};

export default Grid;
