import React from 'react'
import styles from './TimeLineBar.module.css'
import { connect } from 'react-redux'
import CurrentWorklogBar from './CurrentWorklogBar/CurrentWorklogBar'
import {
    beginTimeHour,
    beginTimeMinute,
    popupWorklogToggle
} from '../../../../../redux/actions'



const TimeLineBar = ({beginTimeHour, beginTimeMinute, popupWorklogToggle, selectedDay, month }) => {
    let getClickPositionForTime = event => {
        let xFromPage = event.pageX
        let xOfElement = event.currentTarget.offsetLeft

        let currentXInsideElement = xFromPage - xOfElement // here maybe need +2px check this later
        let hour = Math.floor((currentXInsideElement / 1.46) / 60) + 7 // +7 becouse timeline statrt from 7am
        let minute = Math.floor(currentXInsideElement / 1.46 - ((hour - 7) * 60))

        beginTimeHour(hour)
        beginTimeMinute(minute)

    }

    return (
        <div className={styles.wrapper} >
            <div className={styles.timeBar}>
                <div className={styles.container} onClick={(event) => {
                    getClickPositionForTime(event)
                    popupWorklogToggle()
                }}>


                    {month.map((item, index) => {

                        if (Object.keys(item)[0] === selectedDay) {

                            let day = Object.values(item)[0]

                            return day.map((item, index) => {

                                return <CurrentWorklogBar
                                beginTimeHour={item.beginTimeHour}
                                beginTimeMinute={item.beginTimeMinute}
                                finishTimeHour={item.finishTimeHour}
                                finishTimeMinute={item.finishTimeMinute}
                                key={index}
                            />
                            }
                            )
                        }
                    })}

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
        month: state.worklogReducer.month,

        selectedDay: state.worklogReducer.selectedCalendarDay
    }
}
const mapDispatchToProps = {
    beginTimeHour,
    beginTimeMinute,
    popupWorklogToggle
}

export default connect(mapStateToProps, mapDispatchToProps)(TimeLineBar)