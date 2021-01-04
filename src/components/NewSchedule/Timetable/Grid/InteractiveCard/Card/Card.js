import React, { useState } from 'react';
import classes from './Card.module.scss';

const Card = ({ card, day, startTime, endTime, removeCardInSchedule }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <>
      <div className={classes.Card}>
        <div className='handle'>
          <i className='las la-grip-lines'></i>
        </div>
        <div>
          <p onClick={() => setShowTooltip(true)}>{card.text}</p>
        </div>
      </div>

      {showTooltip ? (
        <div className={classes.Tooltip}>
          <div className={classes.Time}>
            {day} {startTime} - {endTime}
          </div>
          <i onClick={() => setShowTooltip(false)} className='las la-times'></i>
          <ul>
            <li>{card.text}</li>
          </ul>
          <div
            onClick={() => removeCardInSchedule(card.id)}
            className={classes.Delete}
          >
            delete time slot
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Card;
