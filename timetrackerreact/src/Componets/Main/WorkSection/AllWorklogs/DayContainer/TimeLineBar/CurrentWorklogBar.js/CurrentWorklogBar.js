import React from 'react'


const CurrentWorklogBar = ({ beginTimeHour }) => {

    let styles = {
        display: 'flex',
        position: 'absolute',
        color: 'red',
        left: (beginTimeHour - 12) * 8.33 + '%',
    }

    return (
        <div style={styles}>Current Time</div>
    )
}


export default CurrentWorklogBar