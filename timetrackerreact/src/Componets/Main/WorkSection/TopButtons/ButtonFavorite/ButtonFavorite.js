import React from 'react'
import styles from './ButtonFavorite.module.css'

export const ButtonFavorite = (props) => {
    return (
        <div>
            <button className={styles.button}>
                Favorites
            </button>
        </div>
    )
}