INITIAL_STATE = 
{name:'',phone:'',shift:''};
export const EmployeeFormReducer = (state=INITIAL_STATE,action) => {
    console.log(action);
    switch(action.type) {
        case 'NAME_CHANGED':
          return({...state , name:action.payload});
        case 'PHONE_CHANGED':
          return({...state , phone:action.payload});

        case 'SHIFT_CHANGED':
          return({...state , shift:action.payload});
        case 'EMPLOYEE_CREATE_SUCCESS':
           return INITIAL_STATE;
        
           case 'UPDATE_EMPLOYEE_SUCCESS':
           return INITIAL_STATE;
        
          
        
        default :
          return state;

    }
    

};