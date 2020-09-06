import React from 'react'
import styles from './TimeLineBar.module.css'

export const TimeLineBar = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.timeBar}></div>

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
