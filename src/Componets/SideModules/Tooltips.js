import React from 'react'
import { connect } from 'react-redux'
import { toolTip } from '../redux/actions'
import styles from './Tooltips.module.css'

const Tooltips = ({ toolTipTitle, toolTipToggle, toolTip }) => {

   
    
    return (
        
            <div className={toolTipToggle? styles.toolTips : styles.toolTipsHide}>
                <div className={ styles.topBar}>
                    <div className={styles.cirlce}></div>
                    <button className={styles.buttonClose} onClick={() => toolTip('')}>x</button>
                </div>
                <span className={styles.title}>{toolTipTitle}</span>
            </div>
      
    )
}

const mapStateToProps = state => {
    return {
        toolTipToggle: state.worklogReducer.toolTipToggle,
        toolTipTitle: state.worklogReducer.toolTipTitle
    }
}
const mapDispatchToProps = {
    toolTip
}

export default connect(mapStateToProps, mapDispatchToProps)(Tooltips) 