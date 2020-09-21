import React from 'react';
import { connect } from 'react-redux';
import { fire } from './fire';
import { getDataFromServer } from '../redux/actions';

let dataRef = fire.firestore()

const DataBaseServer = ({ getDataFromServer, selectedCalendarDay, preparedNewWorklog }) => {
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


// let loadDataToDB = (base) => {
//     base.forEach(element => {
//         let keyArray = Object.keys(element)[0]
//         let keyValueArray = Object.values(element)
        
//         keyValueArray[0].forEach(elem => {
            
//             dataRef.collection('date').add({
//                 date: keyArray,
//                 second: elem.second,
//                 hour: elem.hour,
//                 beginTime: elem.beginTime,
//                 finishTime: elem.finishTime,
//                 beginTimeHour: elem.beginTimeHour,
//                 beginTimeMinute: elem.beginTimeMinute,
//                 finishTimeHour: elem.finishTimeHour,
//                 finishTimeMinute: elem.finishTimeMinute,
//                 issue: elem.issue,
//                 title: elem.title,
//                 id: elem.id,
//                 minute: Number(elem.minute)
//             })
//                 // .then(function (docRef) {
//                 //     console.log("Document written with ID: ", docRef.id);
//                 // })
//                 .catch(function (error) {
//                     console.error("Error adding document: ", error);
//                 })
//         })
//     }

//     )
// }




// console.log('monthDataBase before export  ', monthDataBase);
// export  default async function hello () {
//      return await monthDataBase
//     }
// } 
//= monthDataBaseEtalon
// monthDataBase.forEach(elem => {
//     console.log('monthDataBase elem: ',elem)
//    // monthDataBase.push

// })
//loadDataToDB(monthDataBaseEtalon) 
//export let monthDataBase //= monthDataBaseEtalon


// let monthDataBaseEtalon = [
//     {
//         "2020-09-01": [
//             { second: 0, second: 0, hour: 0, beginTime: '09:00', finishTime: '10:00', beginTimeHour: 9, beginTimeMinute: 0, finishTimeHour: 10, finishTimeMinute: 0, issue: 'JRM-310', title: 'Team standup', id: 0, },
//             { second: 0, minute: 0, hour: 0, beginTime: '10:00', finishTime: '11:15', beginTimeHour: 10, beginTimeMinute: 0, finishTimeHour: 11, finishTimeMinute: 15, issue: 'JRM-310', title: 'Team Meeting with QA', id: 1, },
//         ],

//     },
//     {
//         "2020-09-02": [
//             { second: 0, minute: 0, hour: 0, beginTime: '11:30', finishTime: '13:00', beginTimeHour: 11, beginTimeMinute: 30, finishTimeHour: 13, finishTimeMinute: 0, issue: 'JRM-310', title: 'Company branding', id: 2, },
//             { second: 0, minute: 0, hour: 0, beginTime: '13:20', finishTime: '16:00', beginTimeHour: 13, beginTimeMinute: 20, finishTimeHour: 16, finishTimeMinute: 0, issue: 'JRM-310', title: 'Team standup3', id: 3, },
//         ],

//     },

//     {
//         "2020-09-03": [
//             { second: 0, minute: 0, hour: 0, beginTime: '11:30', finishTime: '13:00', beginTimeHour: 11, beginTimeMinute: 30, finishTimeHour: 13, finishTimeMinute: 0, issue: 'JRM-310', title: 'Company branding', id: 2, },
//             { second: 0, minute: 0, hour: 0, beginTime: '13:20', finishTime: '16:00', beginTimeHour: 13, beginTimeMinute: 20, finishTimeHour: 16, finishTimeMinute: 0, issue: 'JRM-310', title: 'Team standup3', id: 3, },
//             { second: 0, minute: 0, hour: 0, beginTime: '11:30', finishTime: '13:00', beginTimeHour: 11, beginTimeMinute: 30, finishTimeHour: 13, finishTimeMinute: 0, issue: 'JRM-310', title: 'Company branding', id: 2, },
//             { second: 0, minute: 0, hour: 0, beginTime: '13:20', finishTime: '16:00', beginTimeHour: 13, beginTimeMinute: 20, finishTimeHour: 16, finishTimeMinute: 0, issue: 'JRM-310', title: 'Team standup3', id: 3, },

//         ]
//     },
//     {
//         "2020-09-20": [
//             { second: 0, minute: 0, hour: 0, beginTime: '07:40', finishTime: '09:50', beginTimeHour: 7, beginTimeMinute: 40, finishTimeHour: 9, finishTimeMinute: 50, issue: 'JRM-310', title: 'Company branding', id: 2, },
//             { second: 0, minute: 0, hour: 0, beginTime: '10:20', finishTime: '13:00', beginTimeHour: 10, beginTimeMinute: 20, finishTimeHour: 13, finishTimeMinute: 0, issue: 'JRM-310', title: 'Team standup3', id: 3, },
//             { second: 0, minute: 0, hour: 0, beginTime: '13:30', finishTime: '14:00', beginTimeHour: 13, beginTimeMinute: 30, finishTimeHour: 14, finishTimeMinute: 0, issue: 'JRM-310', title: 'Company branding', id: 2, },
//             { second: 0, minute: 0, hour: 0, beginTime: '15:20', finishTime: '16:00', beginTimeHour: 15, beginTimeMinute: 20, finishTimeHour: 16, finishTimeMinute: 0, issue: 'JRM-310', title: 'Team standup3', id: 3, },

//         ]
//     },
// ]
