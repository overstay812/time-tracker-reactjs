import React, { useState } from 'react'
import styles from './CreateScreen.module.css'
import plus from './plus.svg'
import PopupCreateWorklog from './PopupCreateWorklog/PopupCreateWorklog'
import { connect } from 'react-redux'
import { getTitleName, getIssueName, beginTimeHour, beginTimeMinute } from '../../../../redux/actions'


const CreateScreen = ({ toggleWorklog, runWorklog, showPopupWorklog, popupToggle, getTitleName, getIssueName, beginTimeHour, beginTimeMinute }) => {

    const currentDate = new Date()
    

    return (
        <div className={styles.createScreen}>
            <button className={styles.btn} onClick={() => {
                beginTimeHour(currentDate < 10 ? '0' + currentDate.getHours() : currentDate.getHours())
                beginTimeMinute(currentDate < 10 ? '0' + currentDate.getMinutes() : currentDate.getMinutes())
                toggleWorklog()
                runWorklog()
                getTitleName('')
                getIssueName('')
            }
            }><img src={plus} alt="Create Worklog" /></button>
            <span className={styles.title}>new worklog</span>
            <PopupCreateWorklog showPopupWorklog={showPopupWorklog} popupToggle={popupToggle} toggleWorklog={toggleWorklog} runWorklog={runWorklog} />
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