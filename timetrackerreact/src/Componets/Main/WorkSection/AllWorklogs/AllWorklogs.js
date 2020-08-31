import React from 'react'
import styles from './AllWorklogs.module.css'
import  DayContainer  from './DayContainer/DayContainer'


export const AllWorklogs = (props) => {
    return (
        <div className={styles.allWorklogs}>
            <DayContainer />     
        </div>
    )
}
