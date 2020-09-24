import { fire } from './fire'
import { connect } from 'react-redux';
import { useEffect } from 'react';
import React from 'react'


let dataRef = fire.firestore()

// post data to server  

let PostMonthDataBase = ({ preparedNewWorklog, selectedCalendarDay, toggle }) => {

    let loadDataToDB = () => {
        let keyWorklog = selectedCalendarDay
        let valueWorklog = preparedNewWorklog[0]
        if (keyWorklog) {
        
            console.log(valueWorklog);  
            dataRef.collection('date').add({
                date: keyWorklog,
                second: valueWorklog.second,
                hour: valueWorklog.hour,
                beginTime: valueWorklog.beginTime,
                finishTime: valueWorklog.finishTime,
                beginTimeHour: valueWorklog.beginTimeHour,
                beginTimeMinute: valueWorklog.beginTimeMinute,
                finishTimeHour: valueWorklog.finishTimeHour,
                finishTimeMinute: valueWorklog.finishTimeMinute,
                issue: valueWorklog.issue,
                title: valueWorklog.title,
                id: valueWorklog.id,
                minute: Number(valueWorklog.minute),
                isFavorite: valueWorklog.isFavorite

            })
                .then(function (docRef) {
                    console.log("Document written with ID: ", docRef.id, valueWorklog.id)
               
                })
                .catch(function (error) {
                    console.error("Error adding document: ", error);
                })

        }
    }

    useEffect(() => loadDataToDB(), [preparedNewWorklog])
    return (
        <div></div>
    )
}



const mapStateToProps = state => {
    return {
        selectedCalendarDay: state.worklogReducer.selectedCalendarDay,
        preparedNewWorklog: state.worklogReducer.worklog,
        toggle: state.worklogReducer.month,
    }
}


export default connect(mapStateToProps, null)(PostMonthDataBase)