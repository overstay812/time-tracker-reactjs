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
    return{
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
         type:'RESET_TIMER'}
  }
 
//   export const addIssueAndTitle = (issue, title) => {
    
//     return {
//         type: 'ADD_ISSUE_AND_TITLE',
//         payload: {
//             issue,
//             title    
//         }
//     }
// }