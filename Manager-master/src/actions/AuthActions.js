import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

export const emailChanged = (textInEmail)=> {
    console.log(textInEmail);
    return(
        {
            type:'EMAIL_CHANGED' ,
            payload:textInEmail
        }
    );

};
export const passwordChanged = (textInPassword)=> {
    return(
        {
            type:'PASSWORD_CHANGED' ,
            payload:textInPassword
        }
    );
};

/*Asynchronous action creator .we have to manually dispatch the actions since we want to dispatch
our actions (ie we want to send our actions to reducers only when AJAX request complete)
so we use redux-thunk library to manually dispatch our actions

*/
export const logInUser = ({email,password}) => {

    return(dispatch) => {
        dispatch({type:'LOGIN_USER'});
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then((user) => logInSuccess(dispatch,user))
        .catch(() => {
            firebase.auth().createUserWithEmailAndPassword(email,password)
           .then((user) => logInSuccess(dispatch,user)) 
            .catch(()=> logInFail(dispatch));
        });

    };
};
const logInSuccess =(dispatch,user) => {
    dispatch({
        type:'LOGIN_SUCCESS',
        payload:user

    });
    Actions.employeeList({type:'reset'});

};
const logInFail = (dispatch) => {
    dispatch({
        type:'LOGIN_FAIL'
    });
};