import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { connect } from 'react-redux'
import Slider from '@material-ui/core/Slider';

import { beginTimeHour, beginTimeMinute } from '../../../../../redux/actions';



const useStyles = makeStyles({
    root: {
        width: '100%',
        color: 'green',
        paddingTop: 29,
    },
    rail: {
        background: '#F0F3F5',
        borderRadius: 10,
        height: 10
    },
    track: {
        background: '#FFCC40',
        height: 10

    },
    thumb: {
        width: 16,
        height: 16,
        marginTop: -3,
        background: '#FFCC40',
        border: '5px solid #FFFFFF',

    },
    valueLabel: {
        transform: 'none',
        top: 18,
        left: -13,
        color: 'red'

    },
});


function RangeSlider({ state, currentDateBegin, currentDateFinish, beginTimeHour, beginTimeMinute }) {



    let dateStart = currentDateBegin.getMinutes() + (currentDateBegin.getHours() * 60)
    let dateFinish = currentDateFinish.getMinutes() + (currentDateFinish.getHours() * 60)
    const classes = useStyles();

    const [value, setValue] = React.useState([dateStart, dateFinish]);
    
    const handleChange = (event, newValue) => {
        setValue(newValue);
        beginTimeHour(currentDateBegin.getHours())
        beginTimeMinute(currentDateBegin.getMinutes())

    };


    function valueLabelFormat(value) {
        let hour = Math.floor(value / 60)
        let minute = value - (hour * 60);

        return `${hour}:${minute}`;
    }

    return (
        <div className={classes.root}>

            <Slider
                min={420} // 420 it's 7hr * 60 start of workday
                max={1140} // 1140 it's 19hr * 60 end of workdays 
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                step={1}
                valueLabelFormat={valueLabelFormat}
                // marks={true}
                classes={{
                    root: classes.root, // class name, e.g. `classes-nesting-root-x`
                    rail: classes.rail, // class name, e.g. `classes-nesting-label-x`
                    track: classes.track,
                    thumb: classes.thumb,
                    valueLabel: classes.valueLabel,

                }}
            />
        </div>
    );
}
const mapStateToProps = state => {
    return {
        state: state.worklogReducer
    }
}
const mapDispatchToProps = {
    beginTimeHour,
    beginTimeMinute
}

export default connect(mapStateToProps, mapDispatchToProps)(RangeSlider)