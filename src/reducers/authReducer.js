import {EMAIL_CHANGED} from '../actions/types';
import {PASSWORD_CHANGED} from '../actions/types';
import {LOGIN_SUCCESS} from '../actions/types';
import {CREATE_SUCCESS} from '../actions/types';
const initialState={
    email:'',
    password:'',
    signInSucceed:false,
    status:false,
    err:''
};
export default (state=(initialState),action)=>{
    switch(action.type){
        case EMAIL_CHANGED:{
            //email: action.payload
            return {
                ...state,
                email : action.payload
            }
        }
        case PASSWORD_CHANGED:{
            //password: action.payload;

            return {
                ...state,
                password: action.payload
            }
        }
        case LOGIN_SUCCESS:{
            // console.log("how",action);
            return {
                ...state,
                err:'',
                signInSucceed: action.payload.operationType==="signIn"
            }
        }
        case CREATE_SUCCESS:{
            return {
                ...state,
                err:'',
                signInSucceed:true,
                status: action.payload.operationType==="signIn"
            }
        }
        case 'ERROR':{
            return {
                ...state,
                err:action.payload.message
            }
        }
        default: 
        return state;
    }
}