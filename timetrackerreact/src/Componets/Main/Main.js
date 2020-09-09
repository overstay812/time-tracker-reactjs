import React from 'react'
import styles from './Main.module.css'
import { WorkSection } from './WorkSection/WorkSection'
import { InfoSection } from './InfoSection/InfoSection'
import { useState } from 'react'

export const Main = (props) => {

    const [showPopupWorklog, setShowPopupWorklog] = useState(false)
    let popupToggle = () => { setShowPopupWorklog(!showPopupWorklog) }

    return (
        <div className={styles.main}>
            <WorkSection  popupToggle={popupToggle}/>
            <InfoSection showPopupWorklog={showPopupWorklog} popupToggle={popupToggle}/>
        </div>
    )
 }
