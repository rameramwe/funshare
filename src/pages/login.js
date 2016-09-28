  'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  ScrollView,
  AsyncStorage,
  TouchableHighlight
} from 'react-native';

import Button from '../components/button';
import Header from '../components/header';
import Reflux from 'reflux';
import DataStore from 'funshare/DataStore';
import Actions from 'funshare/Actions';
import Signup from './signup';
import Account from './account';
import Routes from 'funshare/Routes';
import firebase from 'firebase';

import styles from '../styles/common-styles.js';
const FBSDK = require('react-native-fbsdk');
const {
  LoginButton,
} = FBSDK;




export default class login extends Component {

  constructor(props) {
    super(props);
    this.state = { isSignup: false };

    this.email = null;
    this.password = null;
    this.passwordConfirmation = null;
  }

  componentDidMount() {
    Actions.loadUser.completed.listen(this.onLoadUserCompleted.bind(this));
  }


  render(){
    return (
      <Image
      resizeMode={Image.resizeMode.cover}
      source={require('../img/background.png')}
      style = {styles.backgroundImage}
      >
    <ScrollView
      style={{flex:1}}
      >
      
      <View style={styles.LogoComponent}>

      <Image 
      resizeMode={Image.resizeMode.contain}
      source={require('../img/font-logo.png')}
      style={styles.fLogo}                                
      />

      <Image 
      resizeMode={Image.resizeMode.contain}
      source={require('../img/Logo.png')}
      style={styles.Logo}                                
      />

      
      </View>
      <View style={{flex:0.4,marginTop:30}}>

     
      <View style = {styles.textinputcontainer}>
      <TextInput
      style={styles.textinput}
      onChangeText={(text) => this.setState({email: text})}
      keyboardType={"email-address"}
      placeholder={"E-Mail Adresse"}
      onSubmitEditing={() => this.password.focus()}
      returnKeyType="next"
      placeholderTextColor="white"
      underlineColorAndroid="transparent"
      />
      </View>
       <View style = {styles.textinputcontainer}>
      <TextInput
      ref={(ref) => this.password = ref}
      style={styles.textinput}
      onChangeText={(text) => this.setState({password: text})} 
      secureTextEntry={true}
      placeholder={"Passwort"}
      returnKeyType="done"
      onSubmitEditing={this.login.bind(this)}
      placeholderTextColor="white"
      underlineColorAndroid="transparent"
      />
      </View>
    
      <View style={{flex:0.2 , flexDirection: 'row'}}>
      <View style= {{flex:0.5}}>
      <Button
      ref={(ref) => this.btn = ref}
      text="ANMELDEN"
      onpress={this.login.bind(this)}
      button_styles={styles.primary_button}
      button_text_styles={styles.primary_button_text} />
      </View>
      <View style={{alignItems:'flex-end' , flex:0.5 , margin:15}}>
      
      <Text style={{color:"white" , fontSize:14}}>Passwort vergessen?</Text>
      <TouchableHighlight
      onPress={this.goToSignup.bind(this)}>
           <Text style={{textDecorationLine: 'underline', color:"white" , fontSize:14}}>Jetzt hier registrieren</Text>     
      </TouchableHighlight>
      </View>
      </View>

      <View style={{flex: 0.1,justifyContent:'flex-end', alignItems: 'center', marginTop: 10}}>
      

      <LoginButton
      style={{ width:300 , height:35}}
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
      </View>
      
      </ScrollView>
      
      </Image>
      );
  }

  login(){

    this.setState({
      loaded: false
    });
    Actions.login({
      email: this.state.email,
      password: this.state.password
    });





 //   this.props.replaceRoute(Routes.account());


}

goToSignup(){
  this.props.replaceRoute(Routes.signup());
}
loginfb(){


}
onLoadUserCompleted(user) {
    if (user.onboarded) {
      this.props.replaceRoute(Routes.Home1());
    } else {
      this.props.replaceRoute(Routes.Home1());
    }
  }

}

AppRegistry.registerComponent('login', () => login);