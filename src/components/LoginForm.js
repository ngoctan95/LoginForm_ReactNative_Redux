import React, {Component} from 'react';
import {View, Image, TextInput, Dimensions,StyleSheet,Text, ActivityIndicator} from 'react-native';
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
    onBtnPress=()=>{
        // console.log(this.props);
        const {email,password} = this.props;
        this.props.loginUser({email,password});
    }
    _render=()=>{
        //console.log("okkkkkkkkk");
        return(
            <View style={{flex:1}}>
                <ActivityIndicator animating={this.props.isLoading}/>
            </View>
        )
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
                    value={"tan@gmail.com"}
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
                    value={"12345x@X"}
                    placeholder={"..."}/>
                </CardSection>
                <Text>{this.props.err}</Text>
                <CardSection>
                    {
                        (this.props.isLoading)?this._render():
                        <Button text={"Login"} onPress={this.onBtnPress}></Button>
                    }
                </CardSection>
            </Card>
        )
    }
}
const mapStateToProps=(state)=>{
    // console.log("mapp",state);
    // console.log("map",state.authReducer.isLoading?state:null);
    // {state.authReducer.signInSucceed===true?alert("ok"):console.log("fail")}
    return {
        email: state.authReducer.email,
        password:state.authReducer.password,
        isLoggedIn:state.authReducer.signInSucceed,
        status:state.authReducer.status,
        err:state.authReducer.err,
        isLoading:state.authReducer.isLoading
    }
}
export default connect(mapStateToProps,action)(LoginForm);