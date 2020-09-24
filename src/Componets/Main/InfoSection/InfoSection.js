import React from 'react'
import GoogleCalendar from './GoogleCalendar/GoogleCalendar'
import styles from './InfoSection.module.css'
import Worklog from './Worklog/Worklog'

export const InfoSection = () => {
    return (
        <div className={styles.infoSection}>
            <Worklog />
            <GoogleCalendar/>
        </div>
    )
 }
