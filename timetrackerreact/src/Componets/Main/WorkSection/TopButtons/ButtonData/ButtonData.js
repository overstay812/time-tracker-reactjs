import React from 'react'
import styles from './ButtonData.module.css'
import vector from './Vector.svg'

export const ButtonData = (props) => {
    return (
        <div>
            <button className={styles.button}>
                10 JUNE 2020
                 <img src={vector} className={styles.icon} alt="calendar" />
            </button>
        </div>
    )
}