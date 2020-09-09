import React from 'react'
import styles from './WorkSection.module.css'
import { TopButtons } from './TopButtons/TopButtons'
import { AllWorklogs } from './AllWorklogs/AllWorklogs'
import { FavoritesWorklogs } from './FavoritesWorklogs/FavoritesWorklogs'
import { useState } from 'react'

export const WorkSection = ({popupToggle}) => {
const [state, setState] = useState(true)

const toggleShowScreen = () => { 

setState(!state)

}

    return (
        <div className={styles.workSection}>
            <div className={styles.wrapper}>
                <TopButtons toggle={toggleShowScreen} state={state}/>
                <AllWorklogs state={state} popupToggle={popupToggle}/>
                <FavoritesWorklogs state={state}/>
            </div>
        </div>
    )
}
