import React, { useState } from 'react';
import classes from './Card.module.scss';

const Card = ({ text, day, startTime, endTime }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <>
      <div className={classes.Card}>
        <div className='handle'>
          <i className='las la-grip-lines'></i>
        </div>
        <div>
          <p onClick={() => setShowTooltip(true)}>{text}</p>
        </div>
      </div>

      {showTooltip ? (
        <div className={classes.Tooltip}>
          <div className={classes.Time}>
            {day} {startTime} - {endTime}
          </div>
          <i onClick={() => setShowTooltip(false)} className='las la-times'></i>
          <ul>
            <li>{text}</li>
          </ul>
          <div className={classes.Delete}>delete time slot</div>
        </div>
      ) : null}
    </>
  );
};

export default Card;