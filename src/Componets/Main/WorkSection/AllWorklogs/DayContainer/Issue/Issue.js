import React from 'react'
import styles from './Issue.module.css'
import polygon from './Polygon 1.svg'
import { useState } from 'react'
import moreVertical from './more-vertical.svg'
import { connect } from 'react-redux'
import {  addToFavorites, getWorklogId, popupDeleteToggle } from '../../../../../redux/actions'


const Issue = (props) => {

    const [mouseOverWorklog, setMouseOver] = useState(false)
    let toggleWorklog = () => {
        props.getWorklogId(props.beginTime)
        setMouseOver(!mouseOverWorklog)}
        
    const [mouseOverMenu, setMouseOverMenu] = useState(false)
    let toggleMenu = () => setMouseOverMenu(!mouseOverMenu)


    
   
    return (
        <div className={styles.wrapper} onMouseEnter={toggleWorklog} onMouseLeave={toggleWorklog}>
            <div className={mouseOverWorklog ? styles.issueOver : styles.issue} >
                <div className={styles.time}>
                    <span className={styles.timeBegin}>{props.beginTime}&nbsp;</span>
                    <span className={styles.timeFinish}> -  {props.finishTime}</span>
                </div>
                <div className={styles.info}>
                    <span className={styles.label}>{props.issue}</span>
                    <span className={styles.title}>{props.title} </span>
                </div>
                <meter className={styles.meter} min="0" max="100" low="33" high="66" optimum="100" value="33">
                </meter>
                <span className={styles.spendTime}>01:00:00</span>
                <button className={styles.btn}><img src={polygon} alt="Play button" /></button>
            </div>
            <div className={mouseOverWorklog ? styles.menu : styles.menuHide} onMouseEnter={toggleMenu} onMouseLeave={toggleMenu}>
                <div className={styles.dropdownWrapper}>
                    <img src={moreVertical} alt="More menu button" />
                    <div className={mouseOverMenu ? styles.dropdown : styles.dropdownHide}>
                        <a href="#" className={styles.link} >Jira link</a>
                        <a href="#" className={styles.link} >Duplicate</a>
                        <a href="#" className={styles.link} onClick={()=> {

                            props.addToFavorites(true)
                            }} >Add to favorite</a>

                        <a href="#" className={styles.link} onClick={()=> {
                            props.popupDeleteToggle()
                            }} >Delete</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToPRops = {

     getWorklogId,
    addToFavorites,
    popupDeleteToggle
}
export default connect(null, mapDispatchToPRops)(Issue)