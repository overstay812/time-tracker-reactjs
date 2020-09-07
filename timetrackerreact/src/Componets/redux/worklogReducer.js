// import { start, addWorklogInArray } from "./actions"



const initialState = {
    worklog: [
        { beginTime: '09:00', finishTime: '10:00', issue: 'JRM-310', title: 'Team standup', second: 0, minute: 0, hour: 0 },
        { beginTime: '11:00', finishTime: '12:00', issue: 'JRM-310', title: 'Team standup2', second: 0, minute: 0, hour: 0 },
        { beginTime: '13:00', finishTime: '14:00', issue: 'JRM-310', title: 'Team standup3', second: 0, minute: 0, hour: 0 },
    ],

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
    finishTimeMinute: null


}

export const worklogReducer = (state = initialState, action) => {
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
                ...state,issue: action.payload.issue
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

        default: return state
    }
}


