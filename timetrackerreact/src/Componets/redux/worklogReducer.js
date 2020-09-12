// import { start, addWorklogInArray } from "./actions"

import { act } from "react-dom/test-utils";



const initialState = {
    worklog: [
        { second: 0, minute: 0, hour: 0, beginTime: '09:00', finishTime: '10:00', beginTimeHour: 9, beginTimeMinute: 0, finishTimeHour: 10, finishTimeMinute: 0, issue: 'JRM-310', title: 'Team standup', id: 0, },
        { second: 0, minute: 0, hour: 0, beginTime: '10:00', finishTime: '11:15', beginTimeHour: 10, beginTimeMinute: 0, finishTimeHour: 11, finishTimeMinute: 15, issue: 'JRM-310', title: 'Team Meeting with QA', id: 1, },
        { second: 0, minute: 0, hour: 0, beginTime: '11:30', finishTime: '13:00', beginTimeHour: 11, beginTimeMinute: 30, finishTimeHour: 13, finishTimeMinute: 0, issue: 'JRM-310', title: 'Company branding', id: 2, },
        { second: 0, minute: 0, hour: 0, beginTime: '13:20', finishTime: '16:00', beginTimeHour: 13, beginTimeMinute: 20, finishTimeHour: 16, finishTimeMinute: 0, issue: 'JRM-310', title: 'Team standup3', id: 3, },
    ],

    currentFavoriteWorklog: [],
    favoritesWorklog: [],
    newWorklog: {
        // beginTime: '00:00',
        // finishTime: '00:00',
        second: 0,
        minute: 0,
        hour: 0
    },
    issue: '',
    title: '',
    beginTimeHour: null,
    beginTimeMinute: null,
    finishTimeHour: null,
    finishTimeMinute: null,
    id: null

}
export const worklogReducer = (state = initialState, action) => {
    console.log(state.currentFavoriteWorklog);
    switch (action.type) {
        case 'RESET_TIMER':
            return {
                ...state, newWorklog: {
                    second: 0,
                    minute: 0,
                    hour: 0
                }
            }

        case 'START':
            return {
                ...state,
                newWorklog: {
                    second: action.payload.second,
                    minute: action.payload.minute,
                    hour: action.payload.hour,
                    beginTime: `${state.beginTimeHour}:${state.beginTimeMinute}`,
                    finishTime: `${state.finishTimeHour}:${state.finishTimeMinute}`,
                    title: state.title,
                    issue: state.issue,
                    beginTimeHour: state.beginTimeHour,
                    beginTimeMinute: state.beginTimeMinute,
                    finishTimeHour: state.finishTimeHour,
                    finishTimeMinute: state.finishTimeMinute,
                    id: state.id
                }
            }
        case 'STOP':
            return {
                ...state, worklog: state.worklog.concat([state.newWorklog])
            }
        case 'GET_TITLE':
            return {
                ...state, title: action.payload.title
            }
        case 'GET_ISSUE':
            return {
                ...state, issue: action.payload.issue
            }
        case 'GET_BEGIN_TIME_HOUR':
            return {
                ...state, beginTimeHour: action.payload.beginTimeHour
            }
        case 'GET_BEGIN_TIME_MINUTE':
            return {
                ...state, beginTimeMinute: action.payload.beginTimeMinute
            }
        case 'GET_FINISH_TIME_HOUR':
            return {
                ...state, finishTimeHour: action.payload.finishTimeHour
            }
        case 'GET_FINISH_TIME_MINUTE':
            return {
                ...state, finishTimeMinute: action.payload.finishTimeMinute

            }
        case 'GET_WORKLOG_ID':
            console.log('id:', state.id);
            return {
                ...state, id: action.payload.id
            }
        case 'DELETE_WORKLOG':
            return {
                ...state, worklog: state.worklog.filter((item, index) => index !== action.payload.currentId)
            }
        case 'GET_CURRENT_WORKLOG':
            return {
                ...state,
                currentFavoriteWorklog: state.worklog.filter((item, index) => index === action.payload.currentId),
                // favoritesWorklog: state.favoritesWorklog.concat(state.currentFavoriteWorklog)
            }
        case 'ADD_CURRENT_WORKLOG_TO_FAVORITES_ARRAY':
            return {
                ...state,
                // currentFavoriteWorklog: state.worklog.filter((item, index) => index === action.payload.currentId),
                favoritesWorklog: state.favoritesWorklog.concat(state.currentFavoriteWorklog)
            }

        default: return state
    }


}
