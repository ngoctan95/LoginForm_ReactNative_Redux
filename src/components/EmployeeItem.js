import React, {Component} from 'react';
import {View, Image, TextInput, Dimensions,StyleSheet,Text,ListView, ActivityIndicator} from 'react-native';
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
class EmployeeItem extends Component{
    render(){
        console.log("data",this.props);
        const {name}=this.props.data;
        return(
            <CardSection>
                <Text>{name}</Text>
            </CardSection>
        )
    }
}
export default EmployeeItem;