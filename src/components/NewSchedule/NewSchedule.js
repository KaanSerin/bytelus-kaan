import React, { useState } from 'react';
import Grid from './Grid/Grid';
import { Rnd } from 'react-rnd';
import classes from './NewSchedule.module.scss';
import Card from './Card/Card';
import { v4 as uuid } from 'uuid';

const NewSchedule = ({ userCards }) => {
  const [activeCards, setActiveCards] = useState([
    { id: 1, text: 'Test Card' },
    { id: 2, text: 'Test Card 2' },
  ]);

  const [cardsInSchedule, setCardsInSchedule] = useState([
    { id: 1, text: 'Test Card' },
    { id: 2, text: 'Test Card 2' },
  ]);

  const times = [
    '06:00',
    '07:00',
    '08:00',
    '09:00',
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
    '23:00',
    '24:00',
  ];

  const onUserCardClick = (content) => {
    setActiveCards([...activeCards, { id: uuid(), text: content }]);
    setCardsInSchedule([...cardsInSchedule, { id: uuid(), text: content }]);
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
        <input type='text' placeholder='New Schdedule' />
        <i className='las la-edit'></i>
      </div>
      <div className={classes.Main}>
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

        <div className={classes.Timetable}>
          <div className={classes.Days}>
            <p>Monday</p>
            <p>Tuesday</p>
            <p>Wednesday</p>
            <p>Thursday</p>
            <p>Friday</p>
            <p>Saturday</p>
            <p>Sunday</p>
          </div>
          <div className={classes.GridBackground}>
            {times.map((time) => (
              <div key={time}>{time}</div>
            ))}
          </div>

          {/* <Grid /> */}

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
                  height: 32,
                }}
                resizeGrid={[1, 8]}
                dragGrid={[150, 8]}
                minWidth={150}
                maxWidth={150}
                minHeight={8}
                bounds='parent'
              >
                <Card text={card.text} />
              </Rnd>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewSchedule;
