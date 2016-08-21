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
  TouchableHighlight,
  AppRegistry,
  allert
} from 'react-native';

import StyleVars from 'funshare/StyleVars';
import Button from 'funshare/src/components/button';
import InputButton from 'funshare/src/components/icoButton';
import fetchblob from 'funshare/src/components/fetchblob';
var ImagePicker = require('react-native-image-picker');
var deviceheight = Dimensions.get('window').height ;
var Accordion = require('react-native-accordion');
var mmv = 'funshare/src/img/categories/events.png';

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
       picPath1:null,
       open:false,
       category: "Katagorie Auswahlen",
       srcc:mmv

    }
  }
   _onInputButtonPressed(a,b) {
 
   this.setState({
    category:a,
    srcc:b,
    open:false
    
  });
}

calluploadphoto() {

 fetchblob.uploadphoto().then((picSetup) => {
  alert(picSetup.picPath);
  this.setState({
      dummypic:picSetup.source,  
      picPath1:picSetup.picPath    
    });

 }
)
  


}
calluploadphoto1(){

}
  render()
{

  var container = (
  <View>
  <View style={{flexDirection:'row'}}>
  <InputButton
  value={"hotswop"}
  source={require('funshare/src/img/categories/hotswop.png')}
  onPress={this._onInputButtonPressed.bind(this,"hotswop","funshare/src/img/categories/hotswop.png")}
  />
  <InputButton
  value={"campus"}
  source={require('funshare/src/img/categories/campus.png')}
  onPress={this._onInputButtonPressed.bind(this, "campus","funshare/src/img/categories/campus.png")}
  />
  </View>
   <View style={{flexDirection:'row'}}>
  <InputButton
  value={"design"}
  source={require('funshare/src/img/categories/design.png')}
  onPress={this._onInputButtonPressed.bind(this,"design","funshare/src/img/categories/design.png")}
  />
  <InputButton
  value={"family"}
  source={require('funshare/src/img/categories/family.png')}
  onPress={this._onInputButtonPressed.bind(this, "family","funshare/src/img/categories/family.png")}
  />
  </View>
   <View style={{flexDirection:'row'}}>
  <InputButton
  value={"events"}
  source={require('funshare/src/img/categories/events.png')}
  onPress={this._onInputButtonPressed.bind(this,"events","funshare/src/img/categories/events.png")}
  />
  <InputButton
  value={"fashion"}
  source={require('funshare/src/img/categories/fashion.png')}
  onPress={this._onInputButtonPressed.bind(this, "fashion","funshare/src/img/categories/fashion.png")}
  />
  </View>
   <View style={{flexDirection:'row'}}>
  <InputButton
  value={"green"}
  source={require('funshare/src/img/categories/green.png')}
  onPress={this._onInputButtonPressed.bind(this,"green","funshare/src/img/categories/green.png")}
  />
  <InputButton
  value={"food"}
  source={require('funshare/src/img/categories/food.png')}
  onPress={this._onInputButtonPressed.bind(this, "food","funshare/src/img/categories/food.png")}
  />
  </View>
   <View style={{flexDirection:'row'}}>
  <InputButton
  value={"mashine"}
  source={require('funshare/src/img/categories/mashine.png')}
  onPress={this._onInputButtonPressed.bind(this,"mashine","funshare/src/img/categories/mashine.png")}
  />
  <InputButton
  value={"musik"}
  source={require('funshare/src/img/categories/musik.png')}
  onPress={this._onInputButtonPressed.bind(this, "musik","funshare/src/img/categories/musik.png")}
  />
  </View>
   <View style={{flexDirection:'row'}}>
  <InputButton
  value={"mustache"}
  source={require('funshare/src/img/categories/mustache.png')}
  onPress={this._onInputButtonPressed.bind(this,"mustache","funshare/src/img/categories/mustache.png")}
  />
  <InputButton
  value={"trödel"}
  source={require('funshare/src/img/categories/trodel.png')}
  onPress={this._onInputButtonPressed.bind(this, "trödel","funshare/src/img/categories/trodel.png")}
  />
  </View>
   <View style={{flexDirection:'row'}}>
  <InputButton
  value={"vintage"}
  source={require('funshare/src/img/categories/vintage.png')}
  onPress={this._onInputButtonPressed.bind(this,"vintage","funshare/src/img/categories/vintage.png")}
  />
  <InputButton
  value={"over18"}
  source={require('funshare/src/img/categories/over18.png')}
  onPress={this._onInputButtonPressed.bind(this, "over18","funshare/src/img/categories/over18.png")}
  />
  </View>
   <View style={{flexDirection:'row'}}>
  <InputButton
  value={"sammler"}
  source={require('funshare/src/img/categories/sammler.png')}
  onPress={this._onInputButtonPressed.bind(this,"sammler","funshare/src/img/categories/sammler.png")}
  />
  <InputButton
  value={"sport"}
  source={require('funshare/src/img/categories/sport.png')}
  onPress={this._onInputButtonPressed.bind(this, "sport","funshare/src/img/categories/sport.png")}
  />
  </View>
   <View style={{flexDirection:'row'}}>
  <InputButton
  value={"technic"}
  source={require('funshare/src/img/categories/technic.png')}
  onPress={this._onInputButtonPressed.bind(this,"technic","funshare/src/img/categories/technic.png")}
  />
  <InputButton
  value={"travel"}
  source={require('funshare/src/img/categories/travel.png')}
  onPress={this._onInputButtonPressed.bind(this, "travel","funshare/src/img/categories/travel.png")}
  />
  </View>
  </View>
  );
  return ( 
  <View style={styles.container}>
  <ScrollView style={{ flex:1 }}>


  <TouchableOpacity style = {styles.imageContainer}
  onPress={() =>this.calluploadphoto() }>

  <Image
  resizeMode={Image.resizeMode.stretch}
  source={this.state.dummypic}
  style = {styles.image}
  />

  </TouchableOpacity>

  <View style={styles.CContainer}>
  <View style ={{ marginTop:1 ,borderBottomWidth:1, borderColor:'#a9a9a9'}}>
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

  <View style ={{borderBottomWidth:1, borderColor:'#a9a9a9'}}>
  <TextInput
  ref={(ref) => this.description = ref}
  placeholder="Beshreibe es.."
  placeholderTextColor= '#a9a9a9'
  selectionColor='#6495ed'
  style={styles.description}
  autoCapitalize="none"
  autoCorrect={false}
  multiline={true}
  numberOfLines = {6}
  onChangeText={(description) => this.setState({description})}
  />
  </View>

  </View>

  <View>



  <View>

  <View>
 <Accordion
  expanded={this.state.open}
  header={<View style={{padding:10, flexDirection:"row"}}>
    <Image
 resizeMode={Image.resizeMode.contain}
 source={require(this.state.srcc)}
 style = {{width:25, height:25, marginRight:15}}
 />
  <Text style={{fontSize:20, fontWeight:"bold"}}>{this.state.category}</Text>

  </View>}
  content={container}
  easing="easeOutCubic"
  />
  </View>



  <View style ={{flex:1,position:"relative",flexDirection:"row",backgroundColor:"#EDEDEF"}}>
  <Switch onValueChange={(value) => this.setState({falseSwitchIsOn: value})} style={{margin:10}} value={this.state.falseSwitchIsOn} />
  <Text style={{margin:20}}>Auf Facebook teilen</Text>
  </View>

  <TouchableOpacity
  style={styles.button}
  onPress={this.finish.bind(this)}
  >
  <Text style={styles.buttontext}>Tauch Einstellen</Text>
  </TouchableOpacity>



  </View>

  </View>


  </ScrollView>
  </View>

  );
}
    beginadd(){
       Actions.uploadPost();
    }
    finish(){
       if(this.state.title &&this.state.picPath1&&this.state.description ){
        fetchblob.upload1(this.state.picPath1,this.state.title,this.state.description,
        this.state.category);

       }
        else alert("mother sharmootah go add a pic and a title and a description ot i'll come and fuck you");
      

     
    }


  }

   

 var styles = StyleSheet.create({

 container: {
  flex:1,
  alignItems:'stretch',

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

  height: (deviceheight/3) ,
  backgroundColor: '#F5FCFF',
  position: 'relative'
},
CContainer:{
   height: (deviceheight/3) ,
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
  margin:0,
  color: 'black',
  fontSize: 15,
  flex:1
},
description: {
  backgroundColor: 'white',
  color: 'black',
  fontSize: 15,
  flex: 1,
},



footer: {
  alignItems:'flex-end',
}
});

AppRegistry.registerComponent('addstuff', () => addstuff);