import React, { useState } from 'react'
import styles from './NewWorklog.module.css'
import pause from './pause.svg'
import stop from './stop.svg'
import { connect } from 'react-redux'
import { getTitleName, getIssueName } from '../../../../redux/actions'
import { useEffect } from 'react'


const NewWorklog = ({ showWorklog, state, state2, getTitleName, getIssueName, pauseWorklog, runWorklog, popupToggle }) => {

    const [toggleStartPause, setToggleStartPause] = useState(true)

    const [title, setTitle] = useState(state2.title)
    const [issue, setIssue] = useState(state2.issue)

    //  can't use one useEffect because the functions update value each other 
    useEffect(() => {
        getTitleName(title)
    }, [title]
    )
    useEffect(() => {
        getIssueName(issue)
    }, [issue]
    )

    return (
        <div className={showWorklog ? styles.wrapper : styles.hide}>

            <input type="text" className={styles.title} value={state2.title} placeholder="Add title" onChange={event => setTitle(event.target.value)} />
            <input type="text" className={styles.addIssue} value={state2.issue} placeholder="Add issue" onChange={event => setIssue(event.target.value)} />

            <span className={styles.time}>
                {state.hour < 10? '0' + state.hour : state.hour}:{state.minute < 10 ? '0' + state.minute : state.minute}:{state.second < 10 ? '0' + state.second : state.second}
            </span>
            <div className={styles.btnWrapper}>
                <button className={styles.btnStop} onClick={() => {
                    pauseWorklog()
                    popupToggle()
                }}><img src={stop} alt="stop" /></button>
                <button className={styles.btnPause}><img src={pause} alt="pause" onClick={() => {
                    // pause/continue worklog timer
                    toggleStartPause ? pauseWorklog() : runWorklog()
                    setToggleStartPause(!toggleStartPause)
                }} /></button>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        state: state.worklogReducer.newWorklog,
        state2: state.worklogReducer
    }
}

const mapDispatchToProps = {
    getTitleName,
    getIssueName
}

export default connect(mapStateToProps, mapDispatchToProps)(NewWorklog)