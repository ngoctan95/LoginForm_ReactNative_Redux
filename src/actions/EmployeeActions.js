import {EMPLOYEE_UPDATE} from './types';
import {EMPLOYEE_CREATE} from './types';
import {EMPLOYEE_FETCH_SUCCESS} from './types';
import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';
export const employeeCreate=({name,phone, shift})=>{
    return()=>{
        const {currentUser}=firebase.auth();
        firebase.database().ref(`/users/${currentUser.uid}/employees`).push({name,phone,shift})
        .then(res=>Actions.pop());
    };
};
export const employeeUpdate=({prop,value})=>{
    return {
        type: EMPLOYEE_UPDATE,
        payload:{prop,value}
    }
}
export const employeesFetch=()=>{
    const {currentUser}= firebase.auth();
    return(dispatch)=>{
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
        .on('value',snapshot=>{
            //console.log("snapshot",snapshot.val())
            dispatch({type: EMPLOYEE_FETCH_SUCCESS, payload:snapshot.val()})
        })
    }
}