import React from 'react'


const CurrentWorklogBar = ({ beginTimeHour, beginTimeMinute, finishTimeMinute, finishTimeHour }) => {

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
        border: '1px dashed #fdca66',
        left: leftPosition + 'px',
        background: 'rgba(253, 202, 102, 0.2)',
        boxSizing: 'border-box',
        boxShadow: '0px 15px 30px rgba(216, 226, 232, 0.12)',
        borderRadius: 5 + 'px',
    }

    return (
        <div style={styles} onClick={event=> event.stopPropagation()}></div>
    )
}


export default CurrentWorklogBar