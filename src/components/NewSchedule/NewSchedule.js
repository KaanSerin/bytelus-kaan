import React, { useState } from 'react';
import classes from './NewSchedule.module.scss';
import Sidebar from './Sidebar/Sidebar';
import Timetable from './Timetable/Timetable';

const NewSchedule = ({ userCards }) => {
  const [activeCards, setActiveCards] = useState([]);
  const [cardsInSchedule, setCardsInSchedule] = useState([]);

  const onUserCardMouseDown = (content) => {
    setActiveCards([
      ...activeCards,
      { id: parseInt(Math.random() * 1000), text: content },
    ]);
  };

  const onUserCardMouseUp = (content) => {
    setCardsInSchedule([
      ...cardsInSchedule,
      { id: parseInt(Math.random() * 1000), text: content },
    ]);
  };

  const onDragStop = (e, d, card) => {
    if (d.x < -149 || d.x > 1049) {
      console.log(`Card with id ${card.id} with x: ${d.x} is out of bounds.`);
      setCardsInSchedule(activeCards.filter((c) => c.id !== card.id));
      setActiveCards(activeCards.filter((c) => c.id !== card.id));
    }
  };

  return (
    <div className={classes.NewSchedule}>
      <div className={classes.Header}>
        <input type='color' name='' id='' />
        <input type='text' placeholder='New Schedule' />
        <i className='las la-edit'></i>
      </div>
      <div className={classes.Main}>
        <Sidebar
          userCards={userCards}
          cardsInSchedule={cardsInSchedule}
          onUserCardMouseDown={onUserCardMouseDown}
          onUserCardMouseUp={onUserCardMouseUp}
        />

        <Timetable activeCards={activeCards} />
      </div>
    </div>
  );
};

export default NewSchedule;
