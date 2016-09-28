  'use strict';
  import React, { Component } from 'react';
  import  {
    AppRegistry,
    Text,
    TextInput,
    View,
    StyleSheet,
    Image,
    ScrollView,
    Switch,
    TouchableHighlight
  } from 'react-native';

  
  import Routes from 'funshare/Routes';
 
   
  import firebase from 'firebase';

  //let app = new Firebase("https://funshare-c6017.firebaseio.com");



  import style from '../styles/common-styles.js';
   
   var styles = StyleSheet.create({
      button   : {
          backgroundColor: '#fff',
          padding:12,
          margin:10,
          marginTop:10,
          alignItems:'center',
          overflow:'hidden'
      } 
  });


  export default class wishlist extends Component {


   

    constructor(props){
      super(props);
      this.state={
         Mitteilungen:true,
         Neuigkeiten: true,
         Nachricht:true,
         Deal: true
      }
     
     
    }

    signup(){

    
      
    }

    render() {
   return (

      

        <View
        style = {style.backgroundImage}
        >
      <ScrollView style= {{flex=1}}>

      </ScrollView>


           

   
 
        </View>
        );
    }
  }

  AppRegistry.registerComponent('wishlist', () => wishlist);
