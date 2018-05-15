import React, {Component} from 'react';
import {View, Image, TextInput, Dimensions,StyleSheet,Text, ActivityIndicator,Picker} from 'react-native';
import firebase from 'firebase';
import Button from './common/Button';
import Card from './common/Card';
import CardSection from './common/CardSection';
import Input from './common/Input';
import {styles} from '../../style/styleSheet';
import Spinner from './common/Spinner';
import {connect} from 'react-redux';
import * as action from '../actions/index';
class EmployeeCreation extends Component{
    onBtnPress=()=>{
        const {name, phone,shift}=this.props;
        console.log("ok",{name,phone,shift});
        this.props.employeeCreate({name,phone,shift});
    }
    render(){
        return(
            <View>
                <Card>
                <CardSection>
                    <Input 
                    autoCorrect={false}
                    secureTextEntry={false}
                    styleContainer={styles.styleContainerInput}
                    styleText={styles.labelInput}
                    style={styles.styleInput}
                    onChangeText={(text)=>this.props.employeeUpdate({prop:'name',value: text})}
                    label={"Name"}
                    placeholder={"Morile"}/>
                </CardSection>
                <CardSection>
                    <Input
                    autoCorrect={false} 
                    secureTextEntry={true}
                    onChangeText={(text)=>this.props.employeeUpdate({prop:'phone',value:text})}
                    styleContainer={styles.styleContainerInput}
                    styleText={styles.labelInput}
                    style={styles.styleInput}
                    label={"Phone"}
                    placeholder={"0902xxx"}/>
                </CardSection>
                <CardSection style={{flexDirection:'column'}}>
                    <Text style={styles.labelInput}>Shift Picker</Text>
                    <Picker style={{flex:1}}
                            selectedValue={this.props.shift}
                            onValueChange={day=>this.props.employeeUpdate({prop:'shift',value:day})}>
                        <Picker.Item label="Monday" value="Monday"/>
                        <Picker.Item label="Tuesday" value="Tuesday"/>
                        <Picker.Item label="Wednesday" value="Wednesday"/>
                        <Picker.Item label="Thursday" value="Thursday"/>
                        <Picker.Item label="Friday" value="Friday"/>
                    </Picker>
                </CardSection>
                <CardSection>
                    {
                        (this.props.isLoading)?this._render():
                        <Button text={"Create"} onPress={this.onBtnPress}></Button>
                    }
                </CardSection>
            </Card>
            </View>
        )
    }
}
const mapStateToProps =(state)=>{
    console.log(state);
    const {name, phone, shift} =state.employeeReducer;
    return {
        name,phone,shift
    };
}
export default connect(mapStateToProps,action)(EmployeeCreation);