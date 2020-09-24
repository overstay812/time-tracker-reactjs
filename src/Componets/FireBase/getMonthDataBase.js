import React from 'react';
import { connect } from 'react-redux';
import { fire } from './fire';
import { getDataFromServer } from '../redux/actions';

let dataRef = fire.firestore()

const DataBaseServer = ({ getDataFromServer, selectedCalendarDay}) => {
    //get data from server
    let monthDataBase
    let getDataBaseFromServer = () => {

        let dateArray = [];
        let currentDay = selectedCalendarDay
        dataRef.collection('date').get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                let date = doc.data()
                if (date.date === currentDay) {
                    dateArray.push(date)
                }
            })
        })
            .then(() => {
                // dateArray.sort();
                monthDataBase = [{ [currentDay]: dateArray }]

                getDataFromServer(monthDataBase)

            })

    }
    getDataBaseFromServer()
    
    return (
        <div></div>
    )
}


const mapStateToProps = state => {
    return {
        selectedCalendarDay: state.worklogReducer.selectedCalendarDay,
        
    }
}


const mapDispatchToProps = {
    getDataFromServer
}

export default connect(mapStateToProps, mapDispatchToProps)(DataBaseServer)


