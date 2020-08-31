import React from 'react'
import styles from './TopButtons.module.css'
import { ButtonData } from './ButtonData/ButtonData'
import { ButtonAll } from './ButtonAll/ButtonAll'
import { ButtonFavorite } from './ButtonFavorite/ButtonFavorite'

export const TopButtons = (props) => {
    return (
        <div className={styles.topButtons}>
            <ButtonData />
            <div className={styles.wrapper}>
                <ButtonAll />
                <ButtonFavorite />
            </div>
        </div>
    )
}