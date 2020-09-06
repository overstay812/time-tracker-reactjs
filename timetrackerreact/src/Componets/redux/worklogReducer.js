// import { start, addWorklogInArray } from "./actions"



const initialState = {
    worklog: [
        { beginTime: '09:00', finishTime: '10:00', issue: 'JRM-310', title: 'Team standup', second: 0, minute: 0, hour: 0 },
        { beginTime: '11:00', finishTime: '12:00', issue: 'JRM-310', title: 'Team standup2', second: 0, minute: 0, hour: 0 },
        { beginTime: '13:00', finishTime: '14:00', issue: 'JRM-310', title: 'Team standup3', second: 0, minute: 0, hour: 0 },
    ],

    newWorklog: {
        beginTime: '00:00',
        finishTime: '00:00',
        second: 0,
        minute: 0,
        hour: 0
    },
    issue: {
        issue: '',
    },
    title: {
        title: '',
    }
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
                    beginTime: '13:00',
                    finishTime: '14:00',
                    title: state.title.title,
                    issue: state.issue.issue
                }
            }
        case 'STOP':
            return { ...state, worklog: state.worklog.concat([state.newWorklog]) 
            }
        case 'GET_TITLE':
            return {
                ...state, title: {
                    title: action.payload.title
                }
            }
        case 'GET_ISSUE':
            return {
                ...state, issue: {
                    issue: action.payload.issue
                }
            }

        default: return state
    }
}


