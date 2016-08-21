'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
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
      <View style={{marginTop:30}}>

     

      <TextInput
      style={styles.textinput}
      onChangeText={(text) => this.setState({email: text})}
      keyboardType={"email-address"}
      placeholder={"E-mail Adresse"}
      onSubmitEditing={() => this.email.focus()}
      returnKeyType="next"
      />
      <TextInput
      ref={(ref) => this.email = ref}
      style={styles.textinput}
      onChangeText={(text) => this.setState({password: text})} 
      secureTextEntry={true}
      placeholder={"Passwort"}
      returnKeyType="done"
       onSubmitEditing={this.login.bind(this)}
       
      />

    
      <View style={{ flexDirection: 'row'}}>
      <Button
      ref={(ref) => this.btn = ref}
      text="ANMELDEN"
      onpress={this.login.bind(this)}
      button_styles={styles.primary_button}
      button_text_styles={styles.primary_button_text} />
      <View style={{margin:14 ,marginLeft:40 }}>
      
      <Text style={{color:"white" , fontSize:14}}>Passwort vergessen?</Text>
      <TouchableHighlight>
           <Text style={{textDecorationLine: 'underline', color:"white" , fontSize:14}}>Jetzt hier regestrieren</Text>     
      </TouchableHighlight>
      </View>
</View>

      <View style={{flex: 1, alignItems: 'center', margin: 10}}>
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
      </View></View>
      </View>
      
      
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
  var Platform = require('react-native').Platform;
  var ImagePicker = require('react-native-image-picker');

// More info on all the options is below in the README...just some common use cases shown here
var options = {
  title: 'Add a thing to exchange  ',
  customButtons: {
    'Choose Photo from Facebook': 'fb',
  },
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
};

/**
 * The first arg is the options object for customization (it can also be null or omitted for default options),
 * The second arg is the callback which sends object: response (more info below in README)
 */
 ImagePicker.showImagePicker(options, (response) => {
  console.log('Response = ', response);

  if (response.didCancel) {
    console.log('User cancelled image picker');
  }
  else if (response.error) {
    console.log('ImagePicker Error: ', response.error);
  }
  else if (response.customButton) {
    console.log('User tapped custom button: ', response.customButton);
  }
  else {
    // You can display the image using either data...
    const source = {uri: 'data:image/jpeg;base64,' + response.data, isStatic: true};

    // or a reference to the platform specific asset location
    if (Platform.OS === 'ios') {
      const source = {uri: response.uri.replace('file://', ''), isStatic: true};
    } else {
      const source = {uri: response.uri, isStatic: true};
    }

    this.setState({
      avatarSource: source
    });
  }
});
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