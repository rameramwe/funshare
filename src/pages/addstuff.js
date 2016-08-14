'use strict';

import React, { Component } from 'react';
import {
  Dimensions,
  Image,
  Switch,
  PropTypes,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  AppRegistry,
} from 'react-native';

import StyleVars from 'funshare/StyleVars';
import Button from 'funshare/src/components/button';
import imgbutton from 'funshare/src/components/imgbutton';

var ImagePicker = require('react-native-image-picker');


export default class addstuff extends Component {

  constructor(props) {
    super(props);
    this.state = {
       avatarSource: null
    }
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
     allert:(source)
  }
});
}
  render()
  {
    return ( 

      <View style= {styles.container}>

      <TouchableOpacity style = {styles.imageContainer}
      onPress={() => this.goToSignup()}>
      
      <Image
      resizeMode={Image.resizeMode.contain}
       source={this.state.avatarSource}
      style = {styles.image}
      />
      
      </TouchableOpacity>

      <View style= {{flex: 4}}>
      <View style ={{flex:1 , marginTop:3 ,borderBottomWidth:1, borderColor:'#a9a9a9'}}>
      <TextInput
      placeholder="Was tauchst du.."
      placeholderTextColor= '#a9a9a9'
      selectionColor='#6495ed'
      style={styles.textinput}
      autoCapitalize="none"
      autoCorrect={false}
      returnKeyType="next"
      onSubmitEditing={() => this.description.focus()}
      />
      </View>


      <View style ={{flex:3 , marginTop:3 ,borderBottomWidth:1, borderColor:'#a9a9a9'}}>
      <TextInput
      ref={(ref) => this.description = ref}
      placeholder="Beshreibe es.."
      placeholderTextColor= '#a9a9a9'
      selectionColor='#6495ed'
      style={styles.description}
      autoCapitalize="none"
      autoCorrect={false}
      multiline={true}
      numberOfLines = {4}
      />
      </View>

      </View>

      <View style ={{flex:4}}>

     

      <View style = {{flex:2}}>
      <View style={{flex:1 , flexDirection:'row'}}>


      <TouchableOpacity style={{flex:1 ,left:30, flexDirection:'row' , alignItems:'center' }}>     
      <Image
      resizeMode={Image.resizeMode.contain}
      source={require('../img/edit.png')}
      style = {{width:20, height:20, marginRight:30}}
      />
       <Text>Hiiii</Text>     
      </TouchableOpacity>

       <TouchableOpacity style={{flex:1 , flexDirection:'row' , alignItems:'center' , left:50}}>     
      <Image
      resizeMode={Image.resizeMode.contain}
      source={require('../img/edit.png')}
      style = {{width:20, height:20, marginRight:30}}
      />
       <Text>Hiiii</Text>     
      </TouchableOpacity>

      
      </View>

      <TouchableOpacity
        style={styles.button}
      >
        <Text style={styles.buttontext}>hiiiiii</Text>
      </TouchableOpacity>
     

      </View>

      </View>



      </View>

      );
    }


  }

   
  



  var styles = StyleSheet.create({


    container:{
      flex: 1,
      position: 'absolute',
      top:  0,
      left: 0,
      right:  0,
      bottom: 0
    },
    button:{
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: 9,
      paddingHorizontal: 15,
      overflow: "hidden",
      backgroundColor:  '#00D77F',


    },
    buttontext:{
      color: "white",
      fontSize: 20,
      fontWeight: "500"
    },

    edit: {
      position: 'absolute',
      height:10,
      width:10,
      top:0,
      left:0
    },

    imageContainer:{
      flex: 4,
      alignItems: 'stretch',
      backgroundColor: '#F5FCFF',
      position: 'relative'
    },

    image: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
    textinput: {
      backgroundColor: 'white',
      padding:2,
      color: 'black',
      fontSize: 15,
      flex:1
    },
    description: {

      backgroundColor: 'white',
      alignItems:'flex-start',
      padding:0,
      color: 'black',
      fontSize: 15,
      flex: 1,
    },



    footer: {
      alignItems:'flex-end',
    }
  });

  AppRegistry.registerComponent('addstuff', () => addstuff);
