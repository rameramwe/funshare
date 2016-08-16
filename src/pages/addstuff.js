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
  TouchableWithoutFeedback,
  Text,
  AppRegistry,
  allert
} from 'react-native';

import StyleVars from 'funshare/StyleVars';
import Button from 'funshare/src/components/button';
import imgbutton from 'funshare/src/components/imgbutton';
 import fetchblob from 'funshare/src/components/fetchblob';
var ImagePicker = require('react-native-image-picker');

var image = [];

const sport = (
  <View>
       
      <Image
      resizeMode={Image.resizeMode.contain}
      source={require('../img/edit.png')}
      style = {{width:20, height:20, marginRight:30}}
      />
       <Text>Hiiii</Text>     
      
      </View>
);

const port = (   <TouchableOpacity style={{flex:1 , flexDirection:'row' , alignItems:'center' , left:50}}>     
      <Image
      resizeMode={Image.resizeMode.contain}
      source={require('../img/edit.png')}
      style = {{width:20, height:20, marginRight:30}}
      />
       <Text>Hiiii</Text>     
      </TouchableOpacity>);

        const options = [

    "sport",
    "port",
    "baby and child"
  ];
      const nice = [

    "sport",
    "port",
    "baby and child"
  ];

 

export default class addstuff extends Component {

  constructor(props) {
    super(props);
    this.state = {
       dummypic: null,
       title:null,
       description:null,
       falseSwitchIsOn:false,

    }
  }

calluploadphoto() {

 fetchblob.uploadphoto().then((source) => {
  alert(source);
  this.setState({


      dummypic:source
      
    });
 }
)
  


}
calluploadphoto1(){

}
  render()
  {

    
    return ( 

      <View style= {styles.container}>

      <TouchableOpacity style = {styles.imageContainer}
      onPress={() =>this.calluploadphoto() }>
      
      <Image
      resizeMode={Image.resizeMode.contain}
       source={this.state.dummypic}
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
      onChangeText={(title) => this.setState({title})}
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
      onChangeText={(description) => this.setState({description})}
      />
      </View>

      </View>

      <View style ={{flex:4}}>

     

      <View style = {{flex:2}}>
      <View style={{flex:1 , flexDirection:'row'}}>
      <View style={{flexDirection:'column'}}>
      <Image
      resizeMode={Image.resizeMode.contain}
      source={require('../img/edit.png')}
      style = {{width:20, height:20, marginRight:30}}
      />
        <Image
      resizeMode={Image.resizeMode.contain}
      source={require('../img/edit.png')}
      style = {{width:20, height:20, marginRight:30}}
      />
      <Image
      resizeMode={Image.resizeMode.contain}
      source={require('../img/edit.png')}
      style = {{width:20, height:20, marginRight:30}}
      />
      </View>

      </View>

      


  <View style ={{flex:1,flexDirection:"row",backgroundColor:"#EDEDEF"}}>
  <Switch onValueChange={(value) => this.setState({falseSwitchIsOn: value})} style={{margin:10}} value={this.state.falseSwitchIsOn} />
  <Text style={{margin:20}}>Auf Facebook teilen</Text>
  </View>

      <TouchableOpacity
        style={styles.button}
        onPress={this.finish.bind(this)}
      >
        <Text style={styles.buttontext}>hiiiiii</Text>
      </TouchableOpacity>

     

      </View>

      </View>



      </View>

      );
    }
    beginadd(){
       Actions.uploadPost();
    }
    finish(){

      allert(title)
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