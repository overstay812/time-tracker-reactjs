import React, { useRef, useState } from 'react'
import MomentUtils from '@date-io/moment';
import styles from './Calendar.module.css'
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getSelectedCalendarDay } from '../redux/actions';
import { months } from 'moment';

const Calendar = ({ toggleCalendar, getSelectedCalendarDay }) => {
  const [selectedDate, handleDateChange] = useState(new Date());
  useEffect(() => {
    if(selectedDate._d) {
      let year = selectedDate._d.getFullYear()
      let month = selectedDate._d.getMonth() +1
      let dayArray = selectedDate._d.toString().split(' ')
      let day = dayArray[2]
      let fullData = [year,'-', month< 10? '0' + month: month, '-', day]
      let fullDataString = fullData.join('').toString()
      // console.log(day);
      getSelectedCalendarDay(fullDataString)
    }
  
   }, [selectedDate]
  )
    
  //let selectedDay = selectedDate.getDate()typeof 
  
    

    // console.log('selectedDate = ', selectedDate,' type of:',  typeof selectedDate)


    // debugger
    //console.log('selectedDay = ', selectedDay)
    // getSelectedCalendarDay(selectedDate.getDate())
  // useEffect(() => {
   
  //   //debugger
  //   //let dayArray = selectedDate.toString().split(' ')
  //   let selectedDay = selectedDate.getDate()
  //   console.log('selectedDate = ', selectedDate)
  //   console.log('selectedDay = ', selectedDay)
  //   //selectedDate = {}
    

  // }, [selectedDate]

  // )

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
