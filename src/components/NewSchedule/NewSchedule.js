import React from 'react';
import classes from './NewSchedule.module.scss';

const NewSchedule = () => {
  return (
    <div className={classes.NewSchedule}>
      <div className={classes.Header}>
        <input type='color' name='' id='' />
        <input type='text' />
        <i class='las la-edit'></i>
      </div>
      <div className={classes.Main}>
        <div className={classes.Sidebar}>
          <ul>
            <li>In this schedule</li>
            <li>In this schedule</li>
            <li>In this schedule</li>
          </ul>
        </div>
        <div className={classes.Timetable}></div>
      </div>
    </div>
  );
};

export default NewSchedule;
