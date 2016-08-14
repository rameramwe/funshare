'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView
} from 'react-native';


var deviceWidth = Dimensions.get('window').width -6;
var deviceheight = Dimensions.get('window').height -(deviceWidth/2) ;

var temp = 'http://thumbs.dreamstime.com/z/close-up-angry-chihuahua-growling-2-years-old-15126199.jpg'
import Routes from 'funshare/Routes';

export default class mystuff extends Component {
   
   render(){
    return (
    
   <ScrollView style={{ flex:1 }}>
    <View style={styles.container}>
             <TouchableOpacity
          activeOpacity={ 0.75 }
          style={ styles.item }
          >
            <Image
              style={ styles.image }
              source={{uri: temp}}
            /> 
           
        </TouchableOpacity>

         <TouchableOpacity
          activeOpacity={ 0.75 }
          style={ styles.item }
          >
            <Image
              style={ styles.image }
              source={{uri: temp}}
            /> 
           
        </TouchableOpacity>

         <TouchableOpacity
          activeOpacity={ 0.75 }
          style={ styles.item }
          >
            <Image
              style={ styles.image }
              source={{uri: temp}}
            /> 
           
        </TouchableOpacity>

           <TouchableOpacity
          activeOpacity={ 0.75 }
          style={ styles.item }
          >
            <Image
              style={ styles.image }
              source={{uri: temp}}
            /> 
           
        </TouchableOpacity>

           <TouchableOpacity
          activeOpacity={ 0.75 }
          style={ styles.item }
          >
            <Image
              style={ styles.image }
              source={{uri: temp}}
            /> 
           
        </TouchableOpacity>

           <TouchableOpacity
          activeOpacity={ 0.75 }
          style={ styles.item }
          >
            <Image
              style={ styles.image }
              source={{uri: temp}}
            /> 
           
        </TouchableOpacity>

           <TouchableOpacity
          activeOpacity={ 0.75 }
          style={ styles.item }
          >
            <Image
              style={ styles.image }
              source={{uri: temp}}
            /> 
           
        </TouchableOpacity>

           <TouchableOpacity
          activeOpacity={ 0.75 }
          style={ styles.item }
          >
            <Image
              style={ styles.image }
              source={{uri: temp}}
            /> 
           
        </TouchableOpacity>


    </View>


      </ScrollView>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
     justifyContent: "center"
  },

  item: {
    backgroundColor: 'orange',
    width: deviceWidth / 2,
    height: (deviceheight / 2),
    borderColor: 'green',
    borderWidth: 1,
    marginTop:5,

  },

  edit: {
    position: 'absolute',
    height:10,
    width:10,
    top:0,
    left:0
  },


  image: {
    flex:1,
    alignItems: "center",
    justifyContent: "center",
    width: (deviceWidth/2)-2,
    height: (deviceheight/2) ,
  }
});

AppRegistry.registerComponent('mystuff', () => mystuff);

