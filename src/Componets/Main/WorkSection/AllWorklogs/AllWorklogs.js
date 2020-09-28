import React from 'react'
import styles from './AllWorklogs.module.css'
import DayContainer from './DayContainer/DayContainer'
import ReactDOM from 'react-dom';

const AllWorklogs = ({state}) => {
    return (

        <div className={styles.allWorklogs}>
            <DayContainer />
            
        </div>
    )
}

export default AllWorklogs