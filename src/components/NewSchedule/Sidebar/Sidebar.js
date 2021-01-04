import React from 'react';
import classes from './Sidebar.module.scss';

const Sidebar = ({ userCards, cardsInSchedule, onUserCardClick }) => {
  return (
    <div className={classes.Sidebar}>
      <div>
        <h3>In this schedule</h3>
        <ul>
          {cardsInSchedule.map((card) => (
            <li key={card.id}>
              <span className={classes.Card}>{card.text}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3>Your Cards</h3>
        <ul>
          {userCards.map((card) => (
            <li onClick={() => onUserCardClick(card.text)} key={card.id}>
              <span className={classes.Card}>{card.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
