import React from 'react'
import styles from './DayContainer.module.css'
import dowload from './direct-download 1.svg'
import Issue from './Issue/Issue'
import { connect } from 'react-redux'
import TimeLineBar from './TimeLineBar/TimeLineBar'



const DayContainer = ({ month, selectedDay, weekDayNumber }) => {

    let dayNumber = selectedDay.split('-')[2]

    let monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    let monthNumber = Number(selectedDay.split('-')[1])
    let weekDay = Number(weekDayNumber)
    let weekDaysArray = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];



    return (
        <div className={styles.dayContainer}>

            <div className={styles.dataAndFulltime}>
                <span className={styles.data}><b>{weekDaysArray[weekDay]}</b>, {monthArray[monthNumber - 1]} {dayNumber}</span>
                <div className={styles.wrapper}>
                    <div className={styles.fullTimeProgress}>
                        <span className={styles.time}>06:05:00</span>
                        <meter className={styles.meter} min="0" max="100" low="30" high="70"
                            optimum="80" value="69">
                        </meter>
                    </div>
                    <button className={styles.button}><img src={dowload} alt="Download button" /></button>
                </div>
            </div>

            {/* {
                worklogData.map((item, index) => <Issue
                    beginTime={item.beginTime}
                    finishTime={item.finishTime}
                    issue={item.issue}
                    title={item.title}
                    key={index}
                    id={index}
                />)
            } */}


            {month.map((item, index) => {

                if (Object.keys(item)[0] === selectedDay) {

                    let day = Object.values(item)[0]

                    return day.map((item, index) => {

                        return <Issue
                            beginTime={item.beginTime}
                            finishTime={item.finishTime}
                            issue={item.issue}
                            title={item.title}
                            key={index}
                            id={index}
                        />
                    }
                    )
                }
            })}

            <TimeLineBar />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        worklogData: state.worklogReducer.worklog,
        month: state.worklogReducer.month,
        selectedDay: state.worklogReducer.selectedCalendarDay,
        weekDayNumber: state.worklogReducer.selectedDayOfWeekNumber

    }
}

export default connect(mapStateToProps, null)(DayContainer)