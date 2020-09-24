export const start = (second, minute, hour, issue, title) => {

    return {
        type: 'START',
        payload: {
            second,
            minute,
            hour,
            issue,
            title
        }
    }
}
export const addWorklogInArray = () => {
    return {
        type: 'STOP'

    }
}
export const getTitleName = title => {
    return {
        type: 'GET_TITLE',
        payload: {
            title
        }
    }
}
export const getIssueName = issue => {
    return {
        type: 'GET_ISSUE',
        payload: {
            issue
        }
    }
}

export const resetTimer = () => {
    return {
        type: 'RESET_TIMER'
    }
}

export const beginTimeHour = beginTimeHour => {
    return {
        type: 'GET_BEGIN_TIME_HOUR',
        payload: {
            beginTimeHour
        }
    }
}

export const beginTimeMinute = beginTimeMinute => {
    return {
        type: 'GET_BEGIN_TIME_MINUTE',
        payload: {
            beginTimeMinute
        }
    }
}

export const finishTimeHour = finishTimeHour => {
    return {
        type: 'GET_FINISH_TIME_HOUR',
        payload: {
            finishTimeHour
        }
    }
}
export const finishTimeMinute = finishTimeMinute => {
    return {
        type: 'GET_FINISH_TIME_MINUTE',
        payload: {
            finishTimeMinute
        }
    }
}
export const getWorklogId = id => {
    return {
        type: 'GET_WORKLOG_ID',
        payload: {
            id
        }
    }
}
export const deleteWorklog = currentId => {
    return {
        type: 'DELETE_WORKLOG',
        payload: {
            currentId
        }
    }
}
export const popupDeleteToggle = ()=> {
    return {
        type: 'POPUP_DELETE_WORKLOG_TOGGLE',
    }
 }

// export const getCurrentWorklog = currentId => {
//     return {
//         type: 'GET_CURRENT_WORKLOG',
//         payload: {
//             currentId
//         }
//     }
// }
export const addToFavorites = (toggle) => {
    return {
        type: 'ADD_WORKLOG_TO_FAVORITES',
        payload: {
            toggle
        }

    }
}
export const popupWorklogToggle = () => {
    return {
        type: 'POPUP_WORKLOG_TOGGLE_STATE',
    }
}
export const getSelectedCalendarDay = selectedCalendarDay => {
    return {
        type: 'SELECTED_CALENDAR_DAY',
        payload: {
            selectedCalendarDay
        }
    }
}
export const addWorklogInSelectedDay = () => {
    return {
        type: 'ADD_WORKLOG_IN_SELECTED_DAY_IN_MONTH',

    }
}

export const getTodayCalendarDay = todayCalendarDay => {
    return {
        type: 'TODAY_CALENDAR_DAY',
        payload: {
            todayCalendarDay
        }

    }
}

export const getWeekDayNumber = weekDayNumber => {
    return {
        type: 'SELECTED_DAY_OF_WEEK_NUMBER',
        payload: {
            weekDayNumber
        }

    }
}

export const getClickPosition = clickPosition => {
    return {
        type: 'CLICK_POSITION_IN_TIME_LINE_BAR',
        payload: {
            clickPosition
        }
    }
 }

 export const getStartPosition = startPosition => {
    return {
        type: 'START_POSITION',
        payload: {
            startPosition
        }
    }
 }
 export const getEndPosition = endPosition => {
    return {
        type: 'END_POSITION',
        payload: {
            endPosition
        }
    }
 }
 export const getDataFromServer = monthDataBase => {
    return {
        type: 'GETTING_DATA_FROM_SERVER',
        payload: {
            monthDataBase
        }
    }
 }

 export const clearWorklogArray = () => {
    return {
        type: 'CLEAR_WORKLOG_ARRAY',
    }
 }

 export const toolTip = toolTipTitle => {
    return {
        type: 'TOOLTIP_ON',
        payload: {
            toolTipTitle
        }
    }
 }

 export const jiraDowloadToggle = () => {
    return {
        type: 'JIRA_DOWLOAD_TOGGLE',
    }
 }


