import React from 'react'
import styles from './Main.module.css'
import { WorkSection } from './WorkSection/WorkSection'
import { InfoSection } from './InfoSection/InfoSection'

export const Main = (props) => {

    
    return (
        <div className={styles.main}>
            <WorkSection />
            <InfoSection/>
        </div>
    )
 }
