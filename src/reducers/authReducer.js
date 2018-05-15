import {EMAIL_CHANGED} from '../actions/types';
import {PASSWORD_CHANGED} from '../actions/types';
import {LOGIN_SUCCESS} from '../actions/types';
import {CREATE_SUCCESS} from '../actions/types';
import {ISLOADING} from '../actions/types';
const initialState={
    email:'',
    password:'',
    signInSucceed:false,
    status:false,
    err:'',
    isLoading:false
};
export default (state=(initialState),action)=>{
    switch(action.type){
        case EMAIL_CHANGED:{
            //email: action.payload
            return {
                ...state,
                // isLoading:false,
                email : action.payload
            }
        }
        case PASSWORD_CHANGED:{
            //password: action.payload;

            return {
                ...state,
                // isLoading:false,
                password: action.payload
            }
        }
        case LOGIN_SUCCESS:{
            // console.log("how",action);
            return {
                ...state,
                err:'',
                isLoading:false,
                signInSucceed: action.payload.operationType==="signIn"
            }
        }
        case CREATE_SUCCESS:{
            return {
                ...state,
                err:'',
                isLoading:false,
                signInSucceed:true,
                status: action.payload.operationType==="signIn"
            }
        }
        case 'ERROR':{
            return {
                ...state,
                // isLoading:false,
                err:action.payload.message,
                isLoading:action.isLoading
            }
        }
        case ISLOADING:{
            return {
                ...state,
                isLoading:action.payload,
            }
        }
        default: 
        return state;
    }
}