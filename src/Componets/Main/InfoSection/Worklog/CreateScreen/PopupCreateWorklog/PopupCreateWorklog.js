import React from 'react'
import styles from './PopupCreateWorklog.module.css'
import apply from './Vector (Stroke).svg'
import cancel from './x.svg'
import { connect } from 'react-redux'
import {
    addWorklogInArray,
    getTitleName,
    getIssueName,
    start,
    resetTimer,
    finishTimeHour,
    finishTimeMinute,
    popupWorklogToggle,
    addWorklogInSelectedDay
} from '../../../../../redux/actions'
import { useState } from 'react'
import { useEffect } from 'react'
import RangeSlider from './InputRange'


const PopupCreateWorklog = ({
    addWorklogInArray,
    toggleWorklog,
    runWorklog,
    getTitleName,
    getIssueName,
    start,
    state,
    resetTimer,
    finishTimeHour,
    finishTimeMinute,
    currentDateBegin,
    popupWorklogToggle,
    addWorklogInSelectedDay

}) => {

    let [title, setTitle] = useState(state.title)
    let [issue, setIssue] = useState(state.issue)


    useEffect(() => {
        getTitleName(title)
    }, [title])

    useEffect(() => {
        getIssueName(issue)
    }, [issue])

    let second = state.newWorklog.second;
    let minute = state.newWorklog.minute;
    let hour = state.newWorklog.hour;

    let currentDateFinish = new Date()

    return (
        // wrapperHide display none default
        <div className={state.popupWorklogToggleState ? styles.wrapperShow : styles.wrapperHide}>
            <div className={styles.popup}>

                <div className={styles.header}>
                    <span className={styles.headerTitle}>New worklog</span>
                </div>

                <div className={styles.main}>

                    <RangeSlider currentDateBegin={currentDateBegin} currentDateFinish={currentDateFinish} />

                    <div className={styles.nameWrapper}>
                        <label className={styles.nameLabel} for="wrk-input-name">Worklog name*</label>
                        <input type="text"
                            value={state.title}
                            id="wrk-input-name"
                            className={styles.nameInput}
                            placeholder="Enter the worklog name"
                            onChange={event => setTitle(event.target.value)}
                        />
                    </div>

                    <div className={styles.infoWrapper}>
                        <label className={styles.infoLabel} for="wrk-input-info">Issue</label>
                        <input type="text"
                            id="wrk-input-info"
                            className={styles.infoInput}
                            placeholder="Enter the issue name"
                            onChange={event => setIssue(event.target.value)}
                            value={state.issue}
                        />
                    </div>

                </div>
                <div className={styles.footer}>
                    <button className={styles.apply} onClick={() => {
                        // 'start fro update title and issue in reducer'
                        // if (state.title === '') {
                        //     alert('stop!')
                        //     return
                        // }
                        if (state.issue === '') {
                            getIssueName('Enter the issue name')
                        }
                        finishTimeHour(currentDateFinish.getHours() < 10 ? '0' + currentDateFinish.getHours() : currentDateFinish.getHours())
                        finishTimeMinute(currentDateFinish.getMinutes() < 10 ? '0' + currentDateFinish.getMinutes() : currentDateFinish.getMinutes())
                        start(second, minute, hour)
                        addWorklogInArray()
                        addWorklogInSelectedDay()
                        toggleWorklog()
                        resetTimer()
                        popupWorklogToggle()
                        
                        
                  
                    }} ><img src={apply} alt="Apply button" /></button>
                    <button className={styles.cancel} onClick={() => {
                        popupWorklogToggle()
                        runWorklog()
                    }}><img src={cancel} alt="Cancel button" /></button>
                </div>
            </div>
        </div>
    )
}
const mapStateToPRops = state => {
    return {
        state: state.worklogReducer,

    }
}

const mapDispatchToProps = {
    getTitleName,
    getIssueName,
    addWorklogInArray,
    start,
    resetTimer,
    finishTimeHour,
    finishTimeMinute,
    popupWorklogToggle,
    addWorklogInSelectedDay

}
export default connect(mapStateToPRops, mapDispatchToProps)(PopupCreateWorklog)