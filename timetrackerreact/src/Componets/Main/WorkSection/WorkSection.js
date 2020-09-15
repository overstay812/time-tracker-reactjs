import React from 'react'
import styles from './WorkSection.module.css'
import { TopButtons } from './TopButtons/TopButtons'
import { AllWorklogs } from './AllWorklogs/AllWorklogs'
import FavoritesWorklogs from './FavoritesWorklogs/FavoritesWorklogs'
import { useState } from 'react'
import { connect } from 'react-redux'

const WorkSection = ({ stateMonth, selectedDay }) => {

    const [state, setState] = useState(true)

    const toggleShowScreen = () => {

        setState(!state)

    }
    return (
        <div className={styles.workSection}>
            <div className={styles.wrapper}>
                <TopButtons toggle={toggleShowScreen} state={state} />
                {/* <AllWorklogs state={state} /> */}
                {
                    stateMonth.map((item, index) => {
                        if(index === selectedDay) {
                            return <AllWorklogs state={state} />
                        }
                    })
                }
                <FavoritesWorklogs state={state} />
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        stateMonth: state.worklogReducer.month,
        selectedDay: state.worklogReducer.selectedCalendarDay
    }
}

export default connect(mapStateToProps, null)(WorkSection)
