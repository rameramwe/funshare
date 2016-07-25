'use strict';
import React, { Component } from 'react';
import  {
  AppRegistry,
  Text,
  TextInput,
  View
} from 'react-native';

import Button from '../components/button';
import Routes from 'funshare/Routes';
import Header from '../components/header';

import Login from './login';

import firebase from 'firebase';

//let app = new Firebase("https://funshare-c6017.firebaseio.com");


import styles from '../styles/common-styles.js';
const FBSDK = require('react-native-fbsdk');
const {
  LoginButton,
} = FBSDK;

var Loginfbb = React.createClass({
  render: function() {
    return (
      <View>
        <LoginButton
          publishPermissions={["publish_actions"]}
          onLoginFinished={
            (error, result) => {
              if (error) {
                alert("Login failed with error: " + result.error);
              } else if (result.isCancelled) {
                alert("Login was cancelled");
              } else {
                alert("Login was successful with permissions: " + result.grantedPermissions)
              }
            }
          }
          onLogoutFinished={() => alert("User logged out")}/>
      </View>
    );
  }
});

export default class signup extends Component {

  constructor(props){
    super(props);

    this.state = {
      email: '',
      password: '',
      loaded: true
    };
  }

  signup(){

    this.setState({
      loaded: false
    });
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
      if (error) {
         alert(error.code);

      }
        alert("Your account was created!");





});


  }

  goToLogin(){
    this.props.replaceRoute(Routes.login);
  }

  render() {
     return (
      <View>
        <Text>Welcome to the Facebook SDK for React Native!</Text>

        <Loginfbb />
      </View>
    );

  }
}

AppRegistry.registerComponent('signup', () => signup);
