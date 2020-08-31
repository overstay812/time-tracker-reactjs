import React from 'react'
import styles from './PopupCreateWorklog.module.css'
import apply from './Vector (Stroke).svg'
import cancel from './x.svg'

export const PopupCreateWorklog = () => {


    return (
        <div className={styles.wrapperHide}>
            <div className={styles.popup}>

                <div className={styles.header}>
                    <span className={styles.headerTitle}>New worklog</span>
                </div>

                <div className={styles.main}>

                    <input className={styles.range} type="range" />

                    <div className={styles.nameWrapper}>
                        <label className={styles.nameLabel} for="wrk-input-name">Worklog name</label>
                        <input type="text" id="wrk-input-name" className={styles.nameInput}
                            placeholder="Enter the worklog name" />
                    </div>

                    <div className={styles.infoWrapper}>
                        <label className={styles.infoLabel} for="wrk-input-info">Issue</label>
                        <input type="text" id="wrk-input-info" className={styles.infoInput}
                            placeholder="Enter the issue name " />
                    </div>

                </div>
                <div className={styles.footer}>
                    <button className={styles.apply}><img src={apply} alt="Apply button" /></button>
                    <button className={styles.cancel}><img src={cancel} alt="Cancel button" /></button>
                </div>
            </div>
        </div>
    )
}
