INITIAL_STATE = {};
export const EmployeeReducer = (state = INITIAL_STATE,action)=> {
    switch(action.type) {
      case 'FETCH_EMPLOYEES_SUCCESS':
      return action.payload;
      
      default:
      return state;
    };
       
};