import React, { useState } from 'react';
import classes from './Grid.module.scss';
import { Rnd } from 'react-rnd';
import Card from '../Card/Card';

const Grid = () => {
  const [activeCards, setActiveCards] = useState([
    {
      id: 1,
      text: 'Test Card',
    },
    {
      id: 2,
      text: 'Test Card 2',
    },
  ]);

  return (
    <div
      onMouseEnter={(e) => console.log('eyyyy')}
      style={{
        width: '1050px',
        height: '641px',
      }}
      className={classes.Grid}
    >
      {activeCards.map((card) => (
        <Rnd
          default={{
            x: 0,
            y: 0,
            width: 148,
            height: 32,
          }}
          resizeGrid={[1, 8]}
          dragGrid={[150, 8]}
          minWidth={148}
          maxWidth={148}
          minHeight={8}
          bounds='parent'
        >
          <Card key={card.id} text={card.text} />
        </Rnd>
      ))}
    </div>
  );
};

export default Grid;
