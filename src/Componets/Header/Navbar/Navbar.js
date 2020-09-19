import React from 'react'
import styles from './Navbar.module.css'

export const Navbar = (props) => {
    return (
        <div className={styles.navbar}>
            <a className={`${styles.link} ${styles.activeLink}`} href="#">Home</a>
            <a className={`${styles.link}`} href="#">Issues</a>
            <a className={styles.link} href="#">Filter</a>
            <a className={styles.link} href="#">Projects</a>
        </div>
    )
}
