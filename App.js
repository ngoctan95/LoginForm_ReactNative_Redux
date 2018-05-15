
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware,compose} from 'redux';
import reducers from './src/reducers/index';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import LoginForm from './src/components/LoginForm';
import firebase from 'firebase';
import Router from './src/Router';


export default class App extends Component {
  componentWillMount(){
    const config = {
      apiKey: "AIzaSyDp3OznL6zkBtsC7H8NWSoy-Q-9EfsQ-q4",
      authDomain: "test-1e152.firebaseapp.com",
      databaseURL: "https://test-1e152.firebaseio.com",
      projectId: "test-1e152",
      storageBucket: "test-1e152.appspot.com",
      messagingSenderId: "832931310283"
    };
    firebase.initializeApp(config);
  }
  render() {
    return (
      <Provider store={createStore(reducers,compose(applyMiddleware(thunk, logger)))}>
        <View style={{flex:1}}>
          <Router />
        </View> 
      </Provider>
    );
  }
}

