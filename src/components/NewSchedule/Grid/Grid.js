import React from 'react';
import classes from './Grid.module.scss';
import { Rnd } from 'react-rnd';
import Card from '../Card/Card';

const Grid = ({ activeCards }) => {
  return (
    <div
      style={{
        width: '1050px',
        height: '641px',
      }}
      className={classes.Grid}
    >
      {activeCards.map((card) => (
        <Rnd
          key={card.id}
          default={{
            x: 0,
            y: 0,
            width: 150,
            height: 64,
          }}
          resizeGrid={[1, 8]}
          dragGrid={[150, 8]}
          minWidth={150}
          maxWidth={150}
          minHeight={8}
          dragHandleClassName='handle'
          enableResizing={{
            top: false,
            left: false,
            right: false,
            topRight: false,
            topLeft: false,
            bottom: true,
            bottomLeft: true,
            bottomRight: true,
          }}
          bounds='parent'
        >
          <Card text={card.text} />
        </Rnd>
      ))}
    </div>
  );
};

export default Grid;
