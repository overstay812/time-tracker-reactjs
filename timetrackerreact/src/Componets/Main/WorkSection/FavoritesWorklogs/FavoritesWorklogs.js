import React from 'react'
import styles from './FavoritesWorklogs.module.css'

export const FavoritesWorklogs = ({ state }) => {
    return (
        <div className={state ? styles.hide : styles.favoritesWorklogs}>hello</div>
    )
}
