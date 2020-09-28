import React from 'react'
import { useState } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Calendar from '../../../SideModules/Calendar'
import styles from './TopButtons.module.css'
import vector from './Vector.svg'

const TopButtons = ({selectedDay }) => {

    const [state, setState] = useState(true)

    let btnHandlerAll = () => state ? null :  setState(!state)
    let btnHandlerFavorites = () => !state ? null :  setState(!state)

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
                <NavLink to="./allworklogs" activeClassName className={state ? styles.buttonAllActive : styles.buttonAll} onClick={() => btnHandlerAll()}>
                    All
                </NavLink>
                <NavLink to="./favoritesWorklogs" className={state ? styles.buttonFavorites : styles.buttonFavoritesActive} onClick={() => btnHandlerFavorites()}>
                    Favorites
                </NavLink>
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