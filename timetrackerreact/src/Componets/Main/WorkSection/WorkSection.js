import React from 'react'
import styles from './WorkSection.module.css'
import { TopButtons } from './TopButtons/TopButtons'
import { AllWorklogs } from './AllWorklogs/AllWorklogs'
import { FavoritesWorklogs } from './FavoritesWorklogs/FavoritesWorklogs'

export const WorkSection = (props) => {
    return (
        <div className={styles.workSection}>
            <div className={styles.wrapper}>
                <TopButtons />
                <AllWorklogs/>
                <FavoritesWorklogs />
            </div>
        </div>
    )
}
