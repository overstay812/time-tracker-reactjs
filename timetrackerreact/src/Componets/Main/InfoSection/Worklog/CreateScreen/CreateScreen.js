import React, { useState } from 'react'
import styles from './CreateScreen.module.css'
import plus from './plus.svg'
import { PopupCreateWorklog } from './PopupCreateWorklog/PopupCreateWorklog'

export const CreateScreen = (props) => {

    
    return (
        <div className={styles.createScreen}>
            <button className={styles.btn}><img src={plus} alt="Create Worklog" /></button>
            <span className={styles.title}>new worklog</span>

            <PopupCreateWorklog />
        
        </div>
    )
 }
 