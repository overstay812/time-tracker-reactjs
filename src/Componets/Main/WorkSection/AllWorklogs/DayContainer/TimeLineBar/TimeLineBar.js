import React, { useEffect } from 'react'
import styles from './TimeLineBar.module.css'
import { connect } from 'react-redux'
import CurrentWorklogBar from './CurrentWorklogBar/CurrentWorklogBar'
import {
    beginTimeHour,
    beginTimeMinute,
    getClickPosition,
    getEndPosition,
    getStartPosition,
    popupWorklogToggle
} from '../../../../../redux/actions'


// the func for measure click position in time line bar
const TimeLineBar = ({
    beginTimeHour,
    beginTimeMinute,
    popupWorklogToggle,
    selectedDay,
    month,
    getClickPosition,
    clickPosition,
    getStartPosition,
    getEndPosition,
    startPosition,
    endPosition
}) => {


    let countClickPositionForTime = event => {
        let xFromPage = event.pageX
        let xOfElement = event.currentTarget.offsetLeft

        let currentXInsideElement = xFromPage - xOfElement // here maybe need +2px check this later
        let hour = Math.floor((currentXInsideElement / 1.46) / 60) + 7 // +7 becouse timeline statrt from 7am
        let minute = Math.floor(currentXInsideElement / 1.46 - ((hour - 7) * 60))

        beginTimeHour(hour)
        beginTimeMinute(minute)

        let clickPosition = hour * 60 + minute // in minutes

        getClickPosition(clickPosition)

    }


    let getLimitPoints = () => {

//  counting limin points for new worklog in timelinebar
        month.map(item => {
            if (Object.keys(item)[0] === selectedDay) {
                let day = Object.values(item)[0]
                let sNewWorklog = 420
                let eNewWorklog = 1140
                getStartPosition(sNewWorklog)
                getEndPosition(eNewWorklog)
                let breakMap = false
                day.map(item => {

                    let startWorklog= item.beginTimeHour * 60 + item.beginTimeMinute
                    let endWorklog = item.finishTimeHour * 60 + item.finishTimeMinute

                    if ((startWorklog && endWorklog) < clickPosition) {
                        getStartPosition(endWorklog+1)
                        getEndPosition(eNewWorklog)  
                    
                    }
                    else {
                     if (((startWorklog && endWorklog)> clickPosition)&& !breakMap)  {
                        getEndPosition(startWorklog-1) 
                        getStartPosition(sNewWorklog)
                        breakMap = true
                        }}
                        
                })
            }
        })
    }

    useEffect(() => getLimitPoints(), [clickPosition]
    )



    return (
        <div className={styles.wrapper} >
            <div className={styles.timeBar}>
                <div className={styles.container} onClick={(event) => {
                    countClickPositionForTime(event)
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
        selectedDay: state.worklogReducer.selectedCalendarDay,
        clickPosition: state.worklogReducer.clickPosition,
        startPosition: state.worklogReducer.startPosition,
        endPosition: state.worklogReducer.endPosition
    }
}
const mapDispatchToProps = {
    beginTimeHour,
    beginTimeMinute,
    popupWorklogToggle,
    getClickPosition,
    getStartPosition,
    getEndPosition,
}

export default connect(mapStateToProps, mapDispatchToProps)(TimeLineBar)