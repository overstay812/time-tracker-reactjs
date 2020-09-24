import { months } from 'moment'
import React, { useState } from 'react'
import { connect } from 'react-redux'
import styles from './GoogleCalendar.module.css'
import switchActive from './switch active.svg'
import switchUnactive from './switch unactive.svg'
import vectorGray from './VectorGray.svg'

const GoogleCalendar = ({ month, selectedDay }) => {

    const [calendarToggle, setCalendarToggle] = useState(false)

    return (
        <div className={styles.googleCalendar}>
            <div className={styles.container}>
                <div className={styles.calendar}>
                    <span className={styles.titleCalendar}>Google calendar sync</span>
                    <button className={styles.toggler} onClick={() => setCalendarToggle(!calendarToggle)} ><img src={calendarToggle ? switchActive : switchUnactive} alt="calendar active" /></button>
                </div>
                <button className={styles.calendarIcon}><img src={vectorGray} alt="calendar" /></button>
            </div>


            <div className={calendarToggle ? styles.wrapper : styles.wrapperHide}>
                {month.map((item, index) => {
                    if (Object.keys(item)[0] === selectedDay) {
                        let day = Object.values(item)[0]
                        return day.map((item, index) => {
                            return <div className={styles.card}>
                                <div className={styles.statusbar}></div>
                                <div className={styles.item}>
                                    <span className={styles.name}>{item.title}</span>
                                    <span className={styles.time}>{`${item.beginTime}-${item.finishTime}`}</span>
                                </div>
                            </div>
                        }
                        )
                    }
                })}
            </div>  
        </div>
    )
}

const mapStapeToProps = state => {
    return {
        month: state.worklogReducer.month,
        selectedDay: state.worklogReducer.selectedCalendarDay,
    }
}
export default connect(mapStapeToProps, null)(GoogleCalendar) 