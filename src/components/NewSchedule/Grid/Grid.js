import React from 'react';
import classes from './Grid.module.scss';
import { Rnd } from 'react-rnd';
import Card from '../Card/Card';

const Grid = () => {
  return (
    <div
      style={{
        width: '1050px',
        height: '641px',
      }}
      className={classes.Grid}
    >
      <Rnd
        default={{
          x: 0,
          y: 0,
          width: 150,
          height: 32,
        }}
        resizeGrid={[0, 8]}
        dragGrid={[150, 8]}
        minWidth={150}
        maxWidth={150}
        minHeight={8}
        bounds='parent'
      >
        <Card />
      </Rnd>
    </div>
  );
};

export default Grid;
