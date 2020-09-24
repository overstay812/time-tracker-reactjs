import React from 'react'
import { connect } from 'react-redux'
import { toolTip } from '../../../../../../redux/actions'


const CurrentWorklogBar = ({ beginTimeHour, beginTimeMinute, finishTimeMinute, finishTimeHour, jiraDowload }) => {

    // stap measured by 1080px / (12 * 60) 
    let step = 1.46

    // left position
    let convertToMinute = (beginTimeHour - 7) * 60 + beginTimeMinute
    let leftPosition = convertToMinute * step

    // width
    let widthElement = ((finishTimeHour * 60 + finishTimeMinute) - (beginTimeHour * 60 + beginTimeMinute)) * step

    let styles = {
        display: 'flex',
        position: 'absolute',
        color: 'red',
        width: widthElement + 'px',
        height: 19 + 'px',
        border: jiraDowload ? '1px dashed #47D0EB' : '1px dashed #fdca66',
        left: leftPosition + 'px',
        background: jiraDowload ? `rgba(71, 208, 235, 0.2)` : 'rgba(253, 202, 102, 0.2)',
        boxSizing: 'border-box',
        boxShadow: '0px 15px 30px rgba(216, 226, 232, 0.12)',
        borderRadius: 5 + 'px',
    }

    return (
        <div style={styles} onClick={event => event.stopPropagation()}></div>
    )
}

const mapStapeToProps = state => {
    return {
        jiraDowload: state.worklogReducer.jiraDowloadToggle,
    }
}


export default connect(mapStapeToProps, null)(CurrentWorklogBar) 