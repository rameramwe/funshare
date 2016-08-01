'use strict';
import React, { Component } from 'react';
import  {
  StyleSheet
} from 'react-native';

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    top: 0
  },
  backgroundImage:{
    flex:1 ,
    width: null,
    height: null 
  },

  LogoComponent:{
    alignItems: 'center',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  Logo:{
    width: 150,
    height: 75,
    marginBottom: 10
  },
    fLogo: {
    width: 200,
    height: 100,
    marginTop:10
  },
  body: {
    flex: 9,
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  textinput: {
    backgroundColor: 'white',
    padding:7,
    margin:10,
    borderColor: '#F5FCFF',
    color: 'black',
    height: 40,
    fontSize: 15,
    borderBottomColor: "rgba(255,255,255,0.75)",
    borderBottomWidth: 1,
    flex: 1,
    borderWidth: 5,
    textAlign: 'center'
    
  },

  transparent_button: {
    marginTop: 10,
    padding: 15
  },
  transparent_button_text: {
    color: '#0485A9',
    fontSize: 16
  },
  primary_button: {
    margin: 10,
    padding: 15,
    backgroundColor: '#529ecc'
  },
  primary_button_text: {
    color: '#FFF',
    fontSize: 18
  },
  image: {
    width: 100,
    height: 100
  }
});
