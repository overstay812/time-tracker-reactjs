import React from 'react'
import { useState } from 'react'
import Calendar from '../../../SideModules/Calendar'
import styles from './TopButtons.module.css'
import vector from './Vector.svg'

export const TopButtons = ({ toggle, state }) => {

    let btnHandlerAll = () => state ? null : toggle()
    let btnHandlerFavorites = () => !state ? null : toggle()

    let [toggleCalendar, setToggleCalender] = useState(false)
let showCalendar = () => setToggleCalender(!toggleCalendar) 
    
    return (
        <div className={styles.topButtons}>

            <button className={styles.buttonCalendar} onClick={()=> showCalendar()}>
                10 JUNE 2020
                 <img src={vector} className={styles.icon} alt="calendar" />
            </button>

            <div className={styles.wrapper}>
                <button className={styles.buttonAll} onClick={() => btnHandlerAll()}>
                    All
                </button>
                <button className={styles.buttonFavorites} onClick={() => btnHandlerFavorites()}>
                    Favorites
                </button>
            </div>
            <Calendar toggleCalendar={toggleCalendar}/>
        </div>
    )
}