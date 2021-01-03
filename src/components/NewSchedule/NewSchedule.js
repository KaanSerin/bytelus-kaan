import React from 'react';
import Grid from './Grid/Grid';
import classes from './NewSchedule.module.scss';

const NewSchedule = () => {
  return (
    <div className={classes.NewSchedule}>
      <div className={classes.Header}>
        <input type='color' name='' id='' />
        <input type='text' placeholder='New Schdedule' />
        <i class='las la-edit'></i>
      </div>
      <div className={classes.Main}>
        <div className={classes.Sidebar}>
          <div>
            <h3>In this schedule</h3>
          </div>

          <div>
            <h3>Your Cards</h3>
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
          <Grid />
        </div>
      </div>
    </div>
  );
};

export default NewSchedule;
