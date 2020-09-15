import React from 'react'
import styles from './FavoritesWorklogs.module.css'
import Issue from './Issue/Issue'
import { connect } from 'react-redux'

 const FavoritesWorklogs = ({ state, favoritesState }) => {
    return (
        <div className={state ? styles.hide : styles.favoritesWorklogs}>
            {
            favoritesState.map((item, index) => <Issue beginTime={item.beginTime} finishTime={item.finishTime} issue={item.issue} title={item.title} key={index} id={index} />)
            }
        </div>
    )
}
const mapStateToProps = state => {
    return {
        favoritesState : state.worklogReducer.favoritesWorklog
    }
 }

export default connect(mapStateToProps,null)(FavoritesWorklogs)