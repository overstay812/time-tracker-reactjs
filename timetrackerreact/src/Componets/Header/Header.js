import React from 'react'
import { Navbar } from './Navbar/Navbar'
import { Toolbar } from './Toolbar/Toolbar'
import styles from './Header.module.css'

export const Header = (props) => { 
return (
    <div className={styles.header}>
        <Navbar/>
        <Toolbar/>
    </div>
)
}
