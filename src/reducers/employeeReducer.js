import {EMPLOYEE_UPDATE} from '../actions/types';
import {EMPLOYEE_CREATE} from '../actions/types';
import {EMPLOYEE_FETCH_SUCCESS} from '../actions/types';
const initialState={
    name:'',
    phone:'',
    shift:'',
    user:{}
};
export default (state=(initialState),action)=>{
    switch(action.type){
        case EMPLOYEE_UPDATE:{
            return {
                ...state,   
                [action.payload.prop]:action.payload.value
            }
        }
        case EMPLOYEE_CREATE:{
            return{
                ...initialState,
                user: action.payload
            }
        } 
        case EMPLOYEE_FETCH_SUCCESS:{
            // console.log("what",action);
            return{
                ...state,
                user:action.payload
            }
        }
        default:
            return state;
    }
}