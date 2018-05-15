import React, {Component} from 'react';
import {View, Image, TextInput, Dimensions,StyleSheet,Text,FlatList, ActivityIndicator} from 'react-native';
import firebase from 'firebase';
import Button from './common/Button';
import Card from './common/Card';
import CardSection from './common/CardSection';
import Input from './common/Input';
import {styles} from '../../style/styleSheet';
import Spinner from './common/Spinner';
import {connect} from 'react-redux';
import * as action from '../actions/index';
import _ from 'lodash';
import EmployeeItem from './EmployeeItem';
class EmployeeList extends Component{
    componentWillMount(){
        this.props.employeesFetch();
    }
    render(){
        console.log("render",this.props);
        return(
            <View style={{flex:1}}>
                <FlatList
                    data={this.props.employees} 
                    keyExtractor={(x,i)=>i.toString()}
                    renderItem={({ item }) =>
                            <EmployeeItem data={item}/>
                }/>
            </View>

        )
    }
}
const mapStateToProps=(state)=>{
    const employees = _.map(state.employeeReducer.user, (val, uid) => {
        return { ...val, uid };
        });
    return { employees };
}
export default connect(mapStateToProps,action)(EmployeeList);