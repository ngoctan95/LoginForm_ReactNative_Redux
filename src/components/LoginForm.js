import React, {Component} from 'react';
import {View, Image, TextInput, Dimensions,StyleSheet,Text} from 'react-native';
import firebase from 'firebase';
import Button from './common/Button';
import Card from './common/Card';
import CardSection from './common/CardSection';
import Input from './common/Input';
import {styles} from '../../style/styleSheet';
import Spinner from './common/Spinner';
import {connect} from 'react-redux';
import * as action from '../actions/index';

class LoginForm extends Component{
    onEmailChange=(text)=>{
        this.props.emailChanged(text)
    }
    onPasswordChanged=(text)=>{
        this.props.passwordChanged(text)
    }
    constructor(props){
    super(props);
    this.state = {
        text: "",
        titleButton:"Login",
        password:"",
        email:"",
        error:"",
        isLoading:false
        };
    }
    onBtnPress=()=>{
        // console.log(this.props);
        const {email,password} = this.props;
        this.props.loginUser({email,password});
    }
    render=()=>{
        const styleTI=StyleSheet.create({
            input:{
                width:Dimensions.get("window").width-37.5,
                height:20
            }
        })
        const widthViewPort = Dimensions.get("window").width;
        return(
            <Card>
                <CardSection>
                    <Input 
                    autoCorrect={false}
                    secureTextEntry={false}
                    styleContainer={styles.styleContainerInput}
                    styleText={styles.labelInput}
                    style={styles.styleInput}
                    onChangeText={this.onEmailChange}
                    label={"Username"}
                    placeholder={"Input here"}/>
                </CardSection>
                <CardSection>
                    <Input
                    autoCorrect={false} 
                    secureTextEntry={true}
                    onChangeText={this.onPasswordChanged}
                    styleContainer={styles.styleContainerInput}
                    styleText={styles.labelInput}
                    style={styles.styleInput}
                    label={"Password"}
                    placeholder={"..."}/>
                </CardSection>
                <Text>{this.props.err}</Text>
                <CardSection>
                        <Button text={"Login"} onPress={this.onBtnPress}></Button>
                </CardSection>
            </Card>
        )
    }
}
const mapStateToProps=(state)=>{
    console.log("map",state);
    // {state.authReducer.signInSucceed===true?alert("ok"):console.log("fail")}
    return {
        email: state.authReducer.email,
        password:state.authReducer.password,
        isLoggedIn:state.authReducer.signInSucceed,
        status:state.authReducer.status,
        err:state.authReducer.err
    }
}
export default connect(mapStateToProps,action)(LoginForm);