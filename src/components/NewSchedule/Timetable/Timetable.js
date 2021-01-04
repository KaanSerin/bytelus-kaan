import React from 'react';
import Grid from './Grid/Grid';
import classes from './Timetable.module.scss';

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

const Timetable = ({ activeCards }) => {
  return (
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

      <Grid activeCards={activeCards} />
    </div>
  );
};

export default Timetable;
