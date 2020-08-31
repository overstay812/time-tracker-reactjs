const initialState = {
    worklog: [
        { beginTime: '09:00', finishTime: '10:00', label: 'JRM-310', info: 'Team standup' },
        { beginTime: '11:00', finishTime: '12:00', label: 'JRM-310', info: 'Team standup2' },
        { beginTime: '13:00', finishTime: '14:00', label: 'JRM-310', info: 'Team standup3' },
    ]
}
export const worklogReducer = (state = initialState, action) => {
    switch (action.type) {
        case '':
            return state
        default: return state
    }
}
