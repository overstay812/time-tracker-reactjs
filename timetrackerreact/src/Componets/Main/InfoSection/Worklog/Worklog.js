import React from 'react'
import styles from './Worklog.module.css'
import more from './more-horizontal.svg'
import { CreateScreen } from './CreateScreen/CreateScreen'

export const Worklog = (props) => {
    return (
        <div className={styles.worklog}>
            <div className={styles.wrapper}>
                <span className={styles.title}>Time tracking</span>
                <button className={styles.btn}><img src={more} alt="" /></button>
                {/* dropdown menu display none default */}
                <div className={styles.dropdown}>
                    <a href="#" className={styles.link} >Jira link</a>
                    <a href="#" className={styles.link} >Duplicate</a>
                    <a href="#" className={styles.link} >Add to favorite</a>
                    <a href="#" className={styles.link} >Delete</a>
                </div>
            </div>
              {/* worklog container */}
            <div className={styles.container}>
                <CreateScreen/>
            </div>
        </div>
    )
}
