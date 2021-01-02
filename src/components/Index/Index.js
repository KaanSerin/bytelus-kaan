import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Index.module.scss';

const Index = () => {
  return (
    <div className={classes.Index}>
      <Link to='/new-schedule' className={classes.Button}>
        <p>New Schedule</p>
        <p>+</p>
      </Link>

      <Link to='/new-card' className={classes.Button}>
        <p>New Card</p>
        <p>+</p>
      </Link>
    </div>
  );
};

export default Index;
