import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux'
import Slider from '@material-ui/core/Slider';
import { useEffect } from 'react';



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


function valuetext(value) {
    return `${value}°C`;
}


function RangeSlider({ state }) {


    const classes = useStyles();
    const [value, setValue] = React.useState([0, 37]);
    
    
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <div className={classes.root}>

            <Slider
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                getAriaValueText={valuetext}
                step={0.2}
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


export default connect(mapStateToProps, null)(RangeSlider)