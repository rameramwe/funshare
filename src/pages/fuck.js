'use strict';

import React , {Component} from 'react';

import {
  Platform,
  Switch,
  Text,
  View,
  StyleSheet,
  TextInput
} from'react-native';
import Swiper from 'react-native-swiper';

const styles = StyleSheet.create({
  wrapper: {
    flex:1,
    alignItems:'center'
  },

  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },

  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },

  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
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

  render() {
     
  
    return (
     
    <View style={{flex:1}}>
    <View style={{flex:.5}}>
        <Swiper style={styles.wrapper}
        height={260}
      onMomentumScrollEnd={this._onMomentumScrollEnd}
         >
        <View style={styles.slide1}>
          <Text style={styles.text}>Hello Swiper</Text>
        </View>
        <View style={styles.slide2}>
          <Text style={styles.text}>Beautiful</Text>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>And simple</Text>
        </View>
      </Swiper>
      </View>
  
   <View style= {{flex:.5}}>
      <View style ={{flex:1 , marginTop:0 ,borderBottomWidth:1, borderColor:'#a9a9a9'}}>
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


      <View style ={{flex:3 , marginTop:0 ,borderBottomWidth:1, borderColor:'#a9a9a9'}}>
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
    </View>

    );
  }
}
