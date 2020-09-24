import React, { useState } from 'react'
import styles from './CreateScreen.module.css'
import plus from './plus.svg'
import PopupCreateWorklog from './PopupCreateWorklog/PopupCreateWorklog'
import { connect } from 'react-redux'
import {
    getTitleName,
    getIssueName,
    beginTimeHour,
    beginTimeMinute
} from '../../../../redux/actions'


const CreateScreen = ({
    toggleWorklog,
    runWorklog,
    getTitleName,
    getIssueName,
    beginTimeHour,
    beginTimeMinute
}) => {

    let currentDateBegin = new Date()


    return (
        <div className={styles.createScreen}>
            <button className={styles.btn} onClick={() => {
                beginTimeHour(currentDateBegin.getHours() < 10 ? '0' + currentDateBegin.getHours() : currentDateBegin.getHours())
                beginTimeMinute(currentDateBegin.getMinutes() < 10 ? '0' + currentDateBegin.getMinutes() : currentDateBegin.getMinutes())
                toggleWorklog()
                runWorklog()
                getTitleName('')
                getIssueName('')

            }
            }><img src={plus} alt="Create Worklog" /></button>
            <span className={styles.title}>new worklog</span>
            <PopupCreateWorklog
                toggleWorklog={toggleWorklog}
                runWorklog={runWorklog}
                currentDateBegin={currentDateBegin}
            />
        </div>
    )
}

const mapDispatchToProps = {
    getTitleName,
    getIssueName,
    beginTimeHour,
    beginTimeMinute

}
export default connect(null, mapDispatchToProps)(CreateScreen) 