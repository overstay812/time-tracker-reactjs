import React, { useRef, useState } from 'react'
import MomentUtils from '@date-io/moment';
import styles from './Calendar.module.css'
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getSelectedCalendarDay, getTodayCalendarDay, getWeekDayNumber } from '../redux/actions';


const Calendar = ({ toggleCalendar, getSelectedCalendarDay, getTodayCalendarDay, getWeekDayNumber }) => {
  const [selectedDate, handleDateChange] = useState(new Date());
  useEffect(() => {
    if (selectedDate._d) {
      let year = selectedDate._d.getFullYear()
      let month = selectedDate._d.getMonth() + 1
      let day = selectedDate._d.getDate()
      let fullData = [year, '-', month < 10 ? '0' + month : month, '-', day < 10 ? '0' + day : day]
      let fullDataString = fullData.join('').toString()
      // console.log(day);
      let weekDayNumber = selectedDate._d.getDay()
;
      getSelectedCalendarDay(fullDataString)
      getWeekDayNumber(weekDayNumber)
    }

  }, [selectedDate]
  )

  useEffect(() => {
    let dataToday = new Date()
    getTodayCalendarDay(dataToday)

    let year = dataToday.getFullYear()
    let month = dataToday.getMonth() + 1 < 10 ? '0' + (dataToday.getMonth() + 1) : dataToday.getMonth() + 1
    let day = dataToday.getDate() < 10 ? '0' + dataToday.getDate() : dataToday.getDate()

    let formatedData = `${year}-${month}-${day}`.toString()
    getSelectedCalendarDay(formatedData)

    let weekDayNumber = dataToday.getDay()
    getWeekDayNumber(weekDayNumber)
  }, [])


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
  getSelectedCalendarDay,
  getTodayCalendarDay,
  getWeekDayNumber
}
export default connect(null, mapDispatchToProps)(Calendar) 
