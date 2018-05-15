import {combineReducers} from 'redux';
import AuthReducer from './authReducer';
import EmployeeReducer from './employeeReducer';
export default combineReducers({
    authReducer:AuthReducer,
    employeeReducer:EmployeeReducer
});