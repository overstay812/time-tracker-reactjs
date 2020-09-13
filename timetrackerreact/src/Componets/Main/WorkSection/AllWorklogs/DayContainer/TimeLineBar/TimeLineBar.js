import React from 'react'
import styles from './TimeLineBar.module.css'
import { connect } from 'react-redux'
import CurrentWorklogBar from './CurrentWorklogBar/CurrentWorklogBar'

const TimeLineBar = ({ state, popupToggle }) => {

    return (
        <div className={styles.wrapper} >
            <div className={styles.timeBar}>
                <div className={styles.container} onClick={(event) => {
                    event.stopPropagation()
                    popupToggle()}}>
                    {state.worklog.map((item, index) => <CurrentWorklogBar
                        beginTimeHour={item.beginTimeHour}
                        beginTimeMinute={item.beginTimeMinute}
                        finishTimeHour={item.finishTimeHour}
                        finishTimeMinute={item.finishTimeMinute}
                        key={index}
                        onClick={event=> event.preventDefault()} />)}
                </div>
            </div>


            <div className={styles.time}>
                <span className={styles.currentTime}>07:00</span>
                <span className={styles.currentTime}>08:00</span>
                <span className={styles.currentTime}>09:00</span>
                <span className={styles.currentTime}>10:00</span>
                <span className={styles.currentTime}>11:00</span>
                <span className={styles.currentTime}>12:00</span>
                <span className={styles.currentTime}>13:00</span>
                <span className={styles.currentTime}>14:00</span>
                <span className={styles.currentTime}>15:00</span>
                <span className={styles.currentTime}>16:00</span>
                <span className={styles.currentTime}>17:00</span>
                <span className={styles.currentTime}>18:00</span>
                <span className={styles.currentTime}>19:00</span>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        state: state.worklogReducer
    }
}

export default connect(mapStateToProps, null)(TimeLineBar)