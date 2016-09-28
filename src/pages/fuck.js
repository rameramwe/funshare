  'use strict';

import React , {Component} from 'react';

import {
  Platform,
  Switch,
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  BackAndroid,
  Dimensions
} from'react-native';
import IcoButton from 'funshare/src/components/icobutton';
import Swiper from 'react-native-swiper';
import Routes from 'funshare/Routes';
var deviceWidth = Dimensions.get('window').width;
var deviceHeight = Dimensions.get('window').height;
var images=[null];
const styles = StyleSheet.create({
  wrapper: {
   
  },

  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },

  

  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
  textinput: {
    backgroundColor: 'white',
    color: 'black',
    fontSize: 15,
    flex:1
  },
  description: {

    backgroundColor: 'white',
    alignItems:'flex-start',
    marginTop:0,
    color: 'black',
    fontSize: 15,
    flex: 1,
  },
})

export default class fuck extends Component {


  constructor(props) {
    super(props);
    
    this.state = {

      title:this.props.title,
      desc:this.props.desc,
      piclink:this.props.piclink
     //profilePicture:"http://domaingang.com/wp-content/uploads/2012/02/example.png"

   }

 }
 renderImages(){
  var i= 0;
  for (i=0; i<3 ;i++){
    images.push(
      
      
      
     <Image
     style={{flex:1,width:null, height:null}}
     source={{uri: this.state.piclink}}>
     <View style= {{position:'absolute',
     top:15,
     left:5,
     width:25,
     height:25,
     alignItems: 'center',
     justifyContent: 'center',
   }}>
   <IcoButton
   source={require('funshare/src/img/arrow.png')}
   onPress={this.goBack.bind(this)}
   icostyle={{width:25, height:25}}
   />
   </View>
   </Image> 
   )}
   return images;
 }

 goBack(){
  this.props.replaceRoute(Routes.mystuff());
}

render() {


  return (

  <View style={{flex:1}}>
  <View style={{flex:.5}}>

  <Swiper style={styles.wrapper}
  height={deviceHeight/2}
  onMomentumScrollEnd={this._onMomentumScrollEnd}
  >

  {this.renderImages()}

  
  
  </Swiper>
  </View>
  
  <View style= {{flex:.5}}>
  <View style ={{flex:1 , marginTop:0 ,borderBottomWidth:1, borderColor:'#a9a9a9'}}>
  <TextInput
  value={this.state.title}
  editable={false}
  placeholderTextColor= '#a9a9a9'
  selectionColor='#6495ed'
  style={styles.textinput}
  autoCapitalize="none"
  autoCorrect={false}
  returnKeyType="next"
  onSubmitEditing={() => this.description.focus()}
  />
  </View>


  <View style ={{flex:3 , marginTop:0 ,borderBottomWidth:1, borderColor:'#a9a9a9'}}>
  <TextInput
  ref={(ref) => this.description = ref}
  value={this.state.desc}
  editable={false}
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
  </View>

  );
}
}
