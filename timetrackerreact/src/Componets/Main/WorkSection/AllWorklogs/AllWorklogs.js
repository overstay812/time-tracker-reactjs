import React from 'react'
import styles from './AllWorklogs.module.css'
import  DayContainer  from './DayContainer/DayContainer'


export const AllWorklogs = ({state, popupToggle}) => {

    return (
        <div className={state? styles.allWorklogs: styles.hide }>
            <DayContainer popupToggle={popupToggle}/>     
        </div>
    )
}
