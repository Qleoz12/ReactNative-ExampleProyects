INITIAL_STATE = 
{email:'',password:'',user:null,error:'',loading:false};
export const authReducer = (state=INITIAL_STATE,action) => {
    console.log(action);
    switch(action.type) {
        case 'EMAIL_CHANGED':
/*we are making a new object and pushing all the properties of our state object into it
and then we override the email pty of our new obj to action.payload
 if we do state.email=action.payload then return state nothing will be updated by redux
b'cos state===INITIAL_STATE;
*/
          return({...state , email:action.payload});
        case 'PASSWORD_CHANGED':
         return({...state , password:action.payload});
        
         case 'LOGIN_SUCCESS':
           console.log(action.payload);
           return({...state,email:'',password:'',error:'',loading:false,user:action.payload});
        
         case 'LOGIN_FAIL':
            return({...state,password:'',error:'Authentication Failed',loading:false});
  
    //user attempt to login

         case 'LOGIN_USER':
         return({...state,error:'',loading:true});
           
          
        default :
        return state;

    }
    

};