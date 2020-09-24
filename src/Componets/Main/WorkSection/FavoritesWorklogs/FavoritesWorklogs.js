import React from 'react'
import styles from './FavoritesWorklogs.module.css'
import Issue from './Issue/Issue'
import { connect } from 'react-redux'

 const FavoritesWorklogs = ({ state, favoritesState, selectedDay }) => {
    return (
        <div className={state ? styles.hide : styles.favoritesWorklogs}>
           
           {favoritesState.map((item, index) => {

if (Object.keys(item)[0] === selectedDay) {

    let day = Object.values(item)[0]

    return day.map((item, index) => {
 if(item.isFavorite === true) {
    return <Issue
    beginTime={item.beginTime}
    finishTime={item.finishTime}
    issue={item.issue}
    title={item.title}
    key={index}
/>
 }   
    }
    )
}
})}
        </div>
    )
}
const mapStateToProps = state => {
    return {
        favoritesState : state.worklogReducer.month,
        selectedDay: state.worklogReducer.selectedCalendarDay,
    }
 }

export default connect(mapStateToProps,null)(FavoritesWorklogs)