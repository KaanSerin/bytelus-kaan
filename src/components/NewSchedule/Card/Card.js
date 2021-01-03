import React from 'react';
import classes from './Card.module.scss';

const Card = ({ text }) => {
  return (
    <div className={classes.Card}>
      <div>{text}</div>
    </div>
  );
};

export default Card;
