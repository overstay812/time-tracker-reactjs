import React from 'react'
import styles from './Issue.module.css'
import polygon from './Polygon 1.svg'

export const Issue = (props) => {
    return (

        <div className={styles.wrapper}>
            <div className={styles.issue}>
                <div className={styles.time}>
                <span className={styles.timeBegin}>{props.beginTime}&nbsp;</span>
    <span className={styles.timeFinish}> -  {props.finishTime}</span>
                </div>
                <div className={styles.info}>
                    <span className={styles.label}>{props.issue}</span>
                    <span className={styles.title}>{props.title} </span>
                </div>
                <meter className={styles.meter} min="0" max="100" low="30" high="70" optimum="80" value="0">
                </meter>
                <span className={styles.spendTime}>01:00:00</span>
                <button className={styles.btn}><img src={polygon} alt="Play button" /></button>
            </div>
        </div>
    )
}
