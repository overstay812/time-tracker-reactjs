import React from 'react'
import styles from './Issue.module.css'
import polygon from './Polygon 1.svg'
import { useState } from 'react'
import moreVertical from './more-vertical.svg'
import { connect } from 'react-redux'
import { addToFavorites, getWorklogId, popupDeleteToggle } from '../../../../../redux/actions'


const Issue = (props) => {

    const [mouseOverWorklog, setMouseOver] = useState(false)
    let toggleWorklog = () => {
        props.getWorklogId(props.beginTime)
        setMouseOver(!mouseOverWorklog)
    }

    const [mouseOverMenu, setMouseOverMenu] = useState(false)
    let toggleMenu = () => setMouseOverMenu(!mouseOverMenu)

    let fullTime = (props.finishTimeHour * 60 + props.finishTimeMinute) - (props.beginTimeHour * 60 + props.beginTimeMinute) //full time in minutes
    let hour = Math.floor(fullTime / 60)
    let minute = fullTime - (hour * 60)


    return (
        <div className={styles.wrapper} onMouseEnter={toggleWorklog} onMouseLeave={toggleWorklog}>
            <div className={mouseOverWorklog ? styles.issueOver : styles.issue} >
                <div className={styles.time}>
                    <span className={styles.timeBegin}>{props.beginTime}&nbsp;</span>
                    <span className={styles.timeFinish}> -  {props.finishTime}</span>
                </div>
                <div className={props.jiraDowload ? styles.infoBlue : styles.info}>
                    <span className={styles.label}>{props.issue}</span>
                    <span className={styles.title}>{props.title} </span>
                </div>
                <meter className={styles.meter} min="0" max="100" low="33" high="66" optimum="100" value={props.jiraDowload ? '100' : '33'}>
                </meter>
                <span className={styles.spendTime}>{`${hour < 10 ? '0' + hour : hour}:${minute < 10 ? '0' + minute : minute}:00`}</span>
                <button className={styles.btn}><img src={polygon} alt="Play button" /></button>
            </div>
            <div className={mouseOverWorklog ? styles.menu : styles.menuHide} onMouseEnter={toggleMenu} onMouseLeave={toggleMenu}>
                <div className={styles.dropdownWrapper}>
                    <img src={moreVertical} alt="More menu button" />
                    <div className={mouseOverMenu ? styles.dropdown : styles.dropdownHide}>
                       
                        <a href="#" className={styles.link} >Jira link</a>
                        <a href="#" className={styles.link} >Duplicate</a>
                        <a href="#" className={styles.link} onClick={() => {
                            props.addToFavorites(true)
                        }} >Add to favorite</a>

                        <a href="#" className={styles.lastLink} onClick={() => {
                            props.popupDeleteToggle()
                            

                        }} >Delete</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        jiraDowload: state.worklogReducer.jiraDowloadToggle
    }
}
const mapDispatchToPRops = {

    getWorklogId,
    addToFavorites,
    popupDeleteToggle 
}
export default connect(mapStateToProps, mapDispatchToPRops)(Issue)