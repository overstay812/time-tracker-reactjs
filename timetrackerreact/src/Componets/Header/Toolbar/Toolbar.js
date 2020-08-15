import React from 'react'
import styles from './Toolbar.module.css'
import avatar from './Images/avatar.png'
import exit from './Images/exit.svg'
import info from './Images/info.svg'
import settings from './Images/settings.svg'


export const Toolbar = (props) => {
    return (
        <div className={styles.toolbar}>
            <a className={styles.link} href="#"><img src={settings} alt="settings" /></a>
            <a className={styles.link} href="#"><img src={info} alt="info" /></a>
            <a className={styles.link} href="#"><img src={exit} alt="logout" /></a>
            <a className={styles.link} href="#"><img src={avatar} alt="profile" /></a>
        </div>
    )
}
