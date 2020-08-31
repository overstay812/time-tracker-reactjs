import React from 'react'
import styles from './DayContainer.module.css'
import dowload from './direct-download 1.svg'
import { Issue } from './Issule/Issule'
import { connect } from 'react-redux'


 const DayContainer = ({worklogData}) => {
    return (
        <div className={styles.dayContainer}>

            <div className={styles.dataAndFulltime}>
                <span className={styles.data}><b>Wed</b>, June 10</span>
                <div className={styles.wrapper}>
                    <div className={styles.fullTimeProgress}>
                        <span className={styles.time}>06:05:00</span>
                        <meter className={styles.meter} min="0" max="100" low="30" high="70"
                            optimum="80" value="69">
                        </meter>
                    </div>
                    <button className={styles.button}><img src={dowload} alt="Download button"/></button>
                </div>
            </div>
            
            {
             worklogData.map(item => <Issue beginTime={item.beginTime} finishTime={item.finishTime} label={item.label} info={item.info}/>)
            }
            
        </div>
    )
}

const matStateToProps = state => {
    return {
        worklogData: state.worklogReducer.worklog
    }
 }

export default connect(matStateToProps,null)(DayContainer)