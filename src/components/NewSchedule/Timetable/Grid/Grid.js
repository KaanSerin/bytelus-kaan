import React from 'react';
import InteractiveCard from './InteractiveCard/InteractiveCard';

const Grid = ({ removeCardInSchedule, activeCards }) => {
  return (
    <div
      style={{
        width: '1050px',
        height: '641px',
      }}
    >
      {activeCards.map((card) => (
        <InteractiveCard
          removeCardInSchedule={removeCardInSchedule}
          key={card.id}
          card={card}
        />
      ))}
    </div>
  );
};

export default Grid;
