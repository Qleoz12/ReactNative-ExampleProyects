import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
export const nameChanged = (valueInName)=> {
    console.log(valueInName);
    return(
        {
            type:'NAME_CHANGED' ,
            payload:valueInName
        }
    );

};
export const phoneChanged = (valueInPhone)=> {
    return(
        {
            type:'PHONE_CHANGED' ,
            payload:valueInPhone
        }
    );
};
export const shiftChanged = (valueInShift)=> {
    return(
        {
            type:'SHIFT_CHANGED' ,
            payload:valueInShift
        }
    );
};

export const employeeCreate = ({name,phone,shift}) => {
    const currentUser = firebase.auth().currentUser;
    return(dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
        .push({name,phone,shift}).then(()=> {
            dispatch({
                type:'EMPLOYEE_CREATE_SUCCESS'
            });
            Actions.employeeList({type:'reset'});
        });

    };
};

/* the following line of code says that whenever at specified location a new value or data is
detected by firebase it will return an action with paylod of snapshot.val() which is nothing but 
our list of employees.Also note that whenever we add new one to database we need to call this
method explicitly it will automatically called and dispatch a new action with new list of users.
Also it will return employees list in the form of object not array.

*/


export const fetchEmployees = () => {
    const currentUser = firebase.auth().currentUser;
    return(dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
    .on('value',snapshot => {
        dispatch({
            type:'FETCH_EMPLOYEES_SUCCESS',
            payload:snapshot.val()
        });
    });

  };
};

export const updateEmployee = ({name,phone,shift,uid}) => {
    const currentUser = firebase.auth().currentUser;
    return(dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
        .set({name,phone,shift}).then(() =>{
            dispatch({
                type:'UPDATE_EMPLOYEE_SUCCESS'
            });
            Actions.employeeList({type:'reset'});
        });
    };

};
export const fireEmployee = ({uid}) => {
    const currentUser = firebase.auth().currentUser;
    return() => {
        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
        .remove().then(() => {
            Actions.employeeList({type:'reset'});
        });
        

    };
};