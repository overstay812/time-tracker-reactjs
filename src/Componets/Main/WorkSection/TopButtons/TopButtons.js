import React from 'react'
import { useState } from 'react'
import { connect } from 'react-redux'
import Calendar from '../../../SideModules/Calendar'
import styles from './TopButtons.module.css'
import vector from './Vector.svg'

const TopButtons = ({ toggle, state, selectedDay }) => {

    let btnHandlerAll = () => state ? null : toggle()
    let btnHandlerFavorites = () => !state ? null : toggle()

    let [toggleCalendar, setToggleCalender] = useState(false)
    let showCalendar = () => setToggleCalender(!toggleCalendar)

    let year = selectedDay.split('-')[0]
    let dayNumber = selectedDay.split('-')[2]
    let monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    let monthNumber = Number(selectedDay.split('-')[1])

    return (
        <div className={styles.topButtons}>

            <button className={toggleCalendar ? styles.buttonCalendarActive : styles.buttonCalendar}
                onClick={() => showCalendar()}>
                {`${dayNumber} ${monthArray[monthNumber - 1]} ${year}`}
                <img src={vector} className={styles.icon} alt="calendar" />
            </button>

            <div className={styles.wrapper}>
                <button className={state ? styles.buttonAllActive : styles.buttonAll} onClick={() => btnHandlerAll()}>
                    All
                </button>
                <button className={state? styles.buttonFavorites: styles.buttonFavoritesActive} onClick={() => btnHandlerFavorites()}>
                    Favorites
                </button>
            </div>
            <Calendar toggleCalendar={toggleCalendar} />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        selectedDay: state.worklogReducer.selectedCalendarDay,
    }
}
export default connect(mapStateToProps, null)(TopButtons)