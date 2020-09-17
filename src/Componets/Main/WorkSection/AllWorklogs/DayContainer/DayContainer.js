import React from 'react'
import styles from './DayContainer.module.css'
import dowload from './direct-download 1.svg'
import Issue from './Issue/Issue'
import { connect } from 'react-redux'
import TimeLineBar from './TimeLineBar/TimeLineBar'



const DayContainer = ({ month, selectedDay }) => {

    return (
        <div className={styles.dayContainer}>

            <div className={styles.dataAndFulltime}>
                <span className={styles.data}><b>Wed</b>, June 10</span>
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

{/* 
{[<Issue/>,
<Issue/>]} */}

            {month.map( (item, index) => {
                console.log(item);
                if (Object.keys(item)[0] === selectedDay) {
// debugger
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

const matStateToProps = state => {
    return {
        worklogData: state.worklogReducer.worklog,
        month: state.worklogReducer.month,
        selectedDay: state.worklogReducer.selectedCalendarDay
    }
}

export default connect(matStateToProps, null)(DayContainer)