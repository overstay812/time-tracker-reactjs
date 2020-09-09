import React from 'react'
import styles from './InfoSection.module.css'
import Worklog from './Worklog/Worklog'

export const InfoSection = ({showPopupWorklog, popupToggle}) => {
    return (
        <div className={styles.infoSection}>
            <Worklog showPopupWorklog={showPopupWorklog} popupToggle={popupToggle}/>
        </div>
    )
 }
