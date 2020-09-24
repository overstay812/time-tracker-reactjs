import React from 'react'
import styles from './Worklog.module.css'
import more from './more-horizontal.svg'
import CreateScreen from './CreateScreen/CreateScreen'
import NewWorklog from './NewWorklog/NewWorklog'
import { useState } from 'react'
import { connect } from 'react-redux'
import { start } from '../../../redux/actions'

let sec
let min
let hr

const Worklog = ({ state, start }) => {
    // toggle between createscreen and newworklog
    const [showWorklog, setShowWorklog] = useState(false)

    const toggleWorklog = () => {
        setShowWorklog(!showWorklog)
    }
    //

    // start new worklog
    let second = state.second
    let minute = state.minute
    let hour = state.hour


    let runWorklog = () => {

        sec = setInterval(() => {
            second++
            if (second > 59) {
                second = 0
            }
            start(second, minute, hour)
        }, 1000);

        min = setInterval(() => {
            minute++
            if (minute > 60) {
                minute = 0
            }
            start(second, minute, hour)
        }, 60000);
        hr = setInterval(() => {
            hour++
            if (hour > 4) {
                // HERE WILL BE AUTOSTOP WORKLOG CONDITION
            }
        }, 3600000);

    }
const [showDropDown, setShowDropDown] = useState(false)

    let pauseWorklog = () => {
        clearInterval(sec)
        clearInterval(min)
        clearInterval(hr)

    }

    return (
        <div className={styles.worklog}>
            <div className={styles.wrapper}>
                <span className={styles.title}>Time tracking</span>
                <button className={styles.btn} onClick={()=> setShowDropDown(!showDropDown)}><img src={more} alt="more button" /></button>
                {/* dropdown menu display none default */}
                <div className={showDropDown? styles.dropdown: styles.dropdownHide}>
                    <a href="#" className={styles.link} >Jira link</a>
                    <a href="#" className={styles.link} >Duplicate</a>
                    <a href="#" className={styles.link} >Add to favorite</a>
                    <a href="#" className={styles.link} >Delete</a>
                </div>
            </div>
            {/* worklog container */}
            <div className={styles.container}>
                <CreateScreen toggleWorklog={toggleWorklog}
                    runWorklog={runWorklog} 
                    toggleWorklog={toggleWorklog}
                />
                <NewWorklog
                    showWorklog={showWorklog}
                    pauseWorklog={pauseWorklog}
                    runWorklog={runWorklog}
                   
                />
            </div>
        </div>
    )
}
const mapStateToPRops = state => {
    return {
        state: state.worklogReducer.newWorklog,

    }
}

const mapDispatchToProps = {
    start
}
export default connect(mapStateToPRops, mapDispatchToProps)(Worklog)