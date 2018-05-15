import React from 'react';
import {Scene, Router} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreatation from './components/EmployeeCreation';
import {Actions} from 'react-native-router-flux';
const RouterComponent =()=>{
    return(
        <Router>
            <Scene key="root" hideNavBar>
                <Scene key="auth">
                    <Scene key="login" component={LoginForm} title="Login"/>
                </Scene>
                <Scene key="main">
                    <Scene rightTitle="Add" 
                    key="employeeList"
                    onRight={()=>{Actions.employeeCreation()}}
                     component = {EmployeeList}
                      title="List of employee"/>
                    <Scene key="employeeCreation"
                            component={EmployeeCreatation}
                            title="Create New Employee"/>
                </Scene>
            </Scene>    
        </Router>
    )
}
export default RouterComponent;