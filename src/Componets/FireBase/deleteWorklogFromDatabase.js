import React from 'react'
import { fire } from './fire'
import { connect } from 'react-redux';
import { useEffect } from 'react';


let dataRef = fire.firestore()

// post data to server  


let DeleteWorklogFromFirebase = ({ deleteWorklogToggle, selectedDay, id }) => {


    let deleteWorklog = () => {
        let date

        dataRef.collection('date').get()
            .then((querySnapshot, docRef) => {
                querySnapshot.forEach((doc) => {

                    date = doc.data()

                    if (date.date === selectedDay && date.beginTime === id) {

                        let a = doc.ref
                        // console.log(date, a.id );

                        dataRef.collection("date").doc(doc.ref.id).delete()
                            .then(function () {
                                console.log("Document successfully deleted!");
                            })
                            .then()
                            .catch(function (error) {
                                console.error("Error removing document: ", error);
                            })


                    }
                })
            })
            

    }

    useEffect(() => deleteWorklog(), [deleteWorklogToggle])

    return (
        <div></div>
    )
}

const mapStateToProps = state => {
    return {
        deleteWorklogToggle: state.worklogReducer.deleteWorklogToggle,
        selectedDay: state.worklogReducer.selectedCalendarDay,
        id: state.worklogReducer.id
    }
}

export default connect(mapStateToProps, null)(DeleteWorklogFromFirebase)