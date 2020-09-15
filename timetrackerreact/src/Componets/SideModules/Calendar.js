import React, { useState } from 'react'
import MomentUtils from '@date-io/moment';
import styles from './Calendar.module.css'
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getSelectedCalendarDay } from '../redux/actions';

const Calendar = ({ toggleCalendar, getSelectedCalendarDay }) => {
  const [selectedDate, handleDateChange] = useState(new Date());

  useEffect(() => {
    let dayArray = selectedDate.toString().split(' ')
    let selectedDay = Number(dayArray[2])
    console.log(selectedDay);
    getSelectedCalendarDay(selectedDay)
  }, [selectedDate]

  )


  return (
    <div className={toggleCalendar ? styles.wrapper : styles.wrapperHidden}>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <DatePicker
          value={selectedDate}
          onChange={handleDateChange}
          disableToolbar={true}
          variant="static"
        />
      </MuiPickersUtilsProvider>
      {}
    </div>
  );
}

const mapDispatchToProps = {
  getSelectedCalendarDay
}
export default connect(null, mapDispatchToProps)(Calendar) 
