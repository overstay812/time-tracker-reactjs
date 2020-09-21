import { DataFromServer } from "./monthDataBase"
// // import  {monthDataBase}  from './monthDataBase'


const initialState = {
    month: [],
    // month: hello(),

    // [
    // {
    // "2020-09-01": [
    // { second: 0, minute: 0, hour: 0, beginTime: '09:00', finishTime: '10:00', beginTimeHour: 9, beginTimeMinute: 0, finishTimeHour: 10, finishTimeMinute: 0, issue: 'JRM-310', title: 'Team standup', id: 0, },
    // { second: 0, minute: 0, hour: 0, beginTime: '10:00', finishTime: '11:15', beginTimeHour: 10, beginTimeMinute: 0, finishTimeHour: 11, finishTimeMinute: 15, issue: 'JRM-310', title: 'Team Meeting with QA', id: 1, },
    // ]
    // },
    // {
    // "2020-09-02": [
    // { second: 0, minute: 0, hour: 0, beginTime: '11:30', finishTime: '13:00', beginTimeHour: 11, beginTimeMinute: 30, finishTimeHour: 13, finishTimeMinute: 0, issue: 'JRM-310', title: 'Company branding', id: 2, },
    // { second: 0, minute: 0, hour: 0, beginTime: '13:20', finishTime: '16:00', beginTimeHour: 13, beginTimeMinute: 20, finishTimeHour: 16, finishTimeMinute: 0, issue: 'JRM-310', title: 'Team standup3', id: 3, },
    // ]
    // },
    // {
    // "2020-09-03": [
    // { second: 0, minute: 0, hour: 0, beginTime: '13:20', finishTime: '16:00', beginTimeHour: 13, beginTimeMinute: 20, finishTimeHour: 16, finishTimeMinute: 0, issue: 'JRM-310', title: 'Team standup3', id: 3, },
    // ]
    // },
    // ],
    worklog: [],
    currentFavoriteWorklog: [],
    favoritesWorklog: [],
    newWorklog: {
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
    id: null,
    todayCalendarDay: '',
    selectedCalendarDay: '',
    selectedDayOfWeekNumber: '',
    popupWorklogToggleState: false,

    clickPosition: 0,
    startPosition: 420,
    endPosition: 1140


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
                    id: state.id,
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

            return {
                ...state, id: action.payload.id
            }
        case 'DELETE_WORKLOG':
            return {
                ...state, month: state.month.filter((item, index) => index !== action.payload.currentId)
            }
        case 'GET_CURRENT_WORKLOG':

            let day = state.selectedCalendarDay.split("-")
            let number = Number(day[2]) - 1 // -1 becouse calendar start from 1 and index start fron 0

            let currentElement = Object.values(state.month[number])[0][action.payload.currentId]

            return {
                ...state,
                currentFavoriteWorklog: currentElement
            }
        case 'ADD_CURRENT_WORKLOG_TO_FAVORITES_ARRAY':
            return {
                ...state,
                favoritesWorklog: state.favoritesWorklog.concat(state.currentFavoriteWorklog)
            }
        case 'POPUP_WORKLOG_TOGGLE_STATE':
            return {
                ...state, popupWorklogToggleState: !state.popupWorklogToggleState
            }
        case 'SELECTED_CALENDAR_DAY':
            return {
                ...state, selectedCalendarDay: action.payload.selectedCalendarDay
            }
        case 'TODAY_CALENDAR_DAY':
            return {
                ...state, todayCalendarDay: action.payload.todayCalendarDay
            }
        case 'SELECTED_DAY_OF_WEEK_NUMBER':
            return {
                ...state, selectedDayOfWeekNumber: action.payload.weekDayNumber
            }
        case 'ADD_WORKLOG_IN_SELECTED_DAY_IN_MONTH':
            return {
                ...state, month: state.month.map((item, index) => {

                    if (Object.keys(item)[0] === state.selectedCalendarDay) {
                        let key = Object.keys(item)[0]
                        return {
                            [key]: Object.values(item)[0].concat(state.worklog),
                        }

                    } else {
                        return item
                    }
                })
            }
        case 'CLICK_POSITION_IN_TIME_LINE_BAR':
            return {
                ...state, clickPosition: action.payload.clickPosition
            }
        case 'START_POSITION':
            return {
                ...state, startPosition: action.payload.startPosition
            }
        case 'END_POSITION':
            let value = () => {
                let endPosition = action.payload.endPosition
                if ((endPosition - state.startPosition) > 240) { //validation maxlimit in 4hour
                    endPosition = state.startPosition + 240
                }
                return endPosition
            }
            return {
                ...state, endPosition: value()
            }
        case 'GETTING_DATA_FROM_SERVER':
            console.log(action.payload.monthDataBase);
            return {
                ...state, month: action.payload.monthDataBase
            }


        default: return state
    }


}
