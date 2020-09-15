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
export const deleteWorklog = (currentId) => {
    return {
        type: 'DELETE_WORKLOG',
        payload: {
            currentId
        }
    }
}
export const getCurrentWorklog = currentId => {
    return{
        type: 'GET_CURRENT_WORKLOG',
        payload: {
            currentId
        }
    }
 }
 export const addToFavorites = () => {
    return{
        type: 'ADD_CURRENT_WORKLOG_TO_FAVORITES_ARRAY',
       
    }
 }
 export const popupWorklogToggle = () => {
    return{
        type: 'POPUP_WORKLOG_TOGGLE_STATE',
    }
 }
 export const getSelectedCalendarDay = (selectedCalendarDay) => {
     return {
         type: 'SELECTED_CALENDAR_DAY',
         payload: {
            selectedCalendarDay
         }
     }
  }
 

