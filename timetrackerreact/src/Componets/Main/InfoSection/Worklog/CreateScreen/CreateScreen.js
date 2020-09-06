import React, { useState } from 'react'
import styles from './CreateScreen.module.css'
import plus from './plus.svg'
import PopupCreateWorklog from './PopupCreateWorklog/PopupCreateWorklog'
import { connect } from 'react-redux'
import { getTitleName, getIssueName } from '../../../../redux/actions'


const CreateScreen = ({ toggleWorklog, runWorklog, showPopupWorklog, popupToggle, getTitleName, getIssueName}) => {


    return (
        <div className={styles.createScreen}>
            <button className={styles.btn} onClick={() => {
                toggleWorklog()
                runWorklog()
                getTitleName('')
                getIssueName('')

            }
            }><img src={plus} alt="Create Worklog" /></button>
            <span className={styles.title}>new worklog</span>
            <PopupCreateWorklog showPopupWorklog={showPopupWorklog} popupToggle={popupToggle} toggleWorklog={toggleWorklog} runWorklog={runWorklog}/>
        </div>
    )
}

const mapDispatchToProps={
 getTitleName,
  getIssueName
}
export default connect(null, mapDispatchToProps)(CreateScreen) 