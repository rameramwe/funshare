'use strict';
import React, { Component } from 'react';
import  {
  AppRegistry,
  Text,
  TextInput,
  View,
  Image,
  ScrollView,
  BackAndroid
} from 'react-native';

import Button from '../components/button';
import Routes from 'funshare/Routes';
import Header from '../components/header';
import Login from './login';
import firebase from 'firebase';
import IcoButton from 'funshare/src/components/icobutton';
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


 componentDidMount() {
  var self=this;
  BackAndroid.addEventListener('hardwareBackPress', () => {
   
    self.props.replaceRoute(Routes.login());
    return true;
    
  });
}

constructor(props){
  super(props);
  
  this.state = {
    email: '',
    password: '',
    name: '',
    loaded: true
  };
}

signup(){

  this.setState({
    loaded: false
  });
  var save = this;
  firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then(function() {
  // Handle Errors here.
 // var errorCode = error.code;
  //var errorMessage = error.message;
  // ...
     // if (error) {
       //  alert(error.code);
      //}
      var user = firebase.auth().currentUser;
      
      user.updateProfile({
        photoURL: "https://firebasestorage.googleapis.com/v0/b/funshare-c6017.appspot.com/o/default%2Fmale-user-shadow_318-34042.png?alt=media&token=2d4bf3a1-2fef-4aea-9b17-2cd471d4316e",
        displayName: save.state.name,
        
      }).then(function() {
                 // alert(user.photoURL)
                  //alert(user.displayName)
                }, function(error) {
           // An error happened.
         });
      

    });
}
goBack(){
  this.props.replaceRoute(Routes.login())
}
update(){
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      
     user.updateProfile({
      photoURL: "https://firebasestorage.googleapis.com/v0/b/funshare-c6017.appspot.com/o/default%2Fmale-user-shadow_318-34042.png?alt=media&token=2d4bf3a1-2fef-4aea-9b17-2cd471d4316e",
      displayName: this.state.name,
      
    }).then(function() {
                 // alert(user.photoURL)
                  //alert(user.displayName)
                }, function(error) {
           // An error happened.
         });
    
  } 

  
  
  

  
});
}
goToLogin(){
  aler("HI")
  
}

render() {
 return (

  

  <Image
  resizeMode={Image.resizeMode.cover}
  source={require('../img/background.png')}
  style = {styles.backgroundImage}
  >
  <ScrollView
  style={{flex:1}}
  >
  
  <View style= {{position: 'absolute',
  top: 10,
  left: 10,}}>
  <IcoButton
  source={require('funshare/src/img/arrow.png')}
           onPress={this.goBack.bind(this)}
           icostyle={{width:25, height:25}}
           />
           </View>
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
           <View style={{flex:0.5,marginTop:10}}>
           <View style = {styles.textinputcontainer}>
           <TextInput
           style={styles.textinput}
           onChangeText={(text) => this.setState({name: text})}
           keyboardType={"email-address"}
           placeholder={"Vollständiger Name"}
           onSubmitEditing={() => this.email.focus()}
           returnKeyType="next"
           placeholderTextColor="white"
           underlineColorAndroid="transparent"
           />
           </View>
           <View style = {styles.textinputcontainer}>
           <TextInput
           ref={(ref) => this.email = ref}
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
           onSubmitEditing={() => this.password.focus()}  
           placeholderTextColor="white"
           underlineColorAndroid="transparent"     
           />
           
           </View>
           
           <View style={{ flex:0.1,flexDirection: 'row'}}>
           <Button
           ref={(ref) => this.btn = ref}
           text="Registrieren"
           onpress={this.signup.bind(this)}
           button_styles={styles.primary_button}
           button_text_styles={styles.primary_button_text} />
           </View>

           
           <View style={{flex:0.1,justifyContent:'flex-end',alignItems:'center'}}> 

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
}
AppRegistry.registerComponent('signup', () => signup);