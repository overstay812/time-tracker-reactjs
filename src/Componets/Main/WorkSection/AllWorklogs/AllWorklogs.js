import React from 'react'
import styles from './AllWorklogs.module.css'
import DayContainer from './DayContainer/DayContainer'
import ReactDOM from 'react-dom';


export const AllWorklogs = ({ state }) => {
    return (

        <div className={state ? styles.allWorklogs : styles.hide}>
            <DayContainer />
            
        </div>
    )
}
