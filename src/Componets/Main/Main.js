import React from 'react'
import styles from './Main.module.css'
import WorkSection from './WorkSection/WorkSection'
import { InfoSection } from './InfoSection/InfoSection'
import Tooltips from '../SideModules/Tooltips'
import DeleteWarning from '../SideModules/DeleteWarning'

export const Main = (props) => {



    return (
        <div className={styles.main}>
            <WorkSection />
            <InfoSection />
            <Tooltips />
            <DeleteWarning />
        </div>
    )
}
