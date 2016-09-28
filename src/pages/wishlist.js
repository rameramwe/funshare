'use strict';
import React, { Component } from 'react';
import  {
  AppRegistry,
  Text,
  Slider,
  TextInput,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
  Dimensions
} from 'react-native';

import Routes from 'funshare/Routes';
import IcotextButton from 'funshare/src/components/icotextButton';

import firebase from 'firebase';

//let app = new Firebase("https://funshare-c6017.firebaseio.com");

import InputButton from 'funshare/src/components/icotextButton';
import IcoButton from 'funshare/src/components/icobutton';
import style from '../styles/common-styles.js';
var deviceWidth = Dimensions.get('window').width -6;
var deviceheight = Dimensions.get('window').height -(deviceWidth/2) ;
var piclinks=["fuck"];
var image=[null] ;
var styles = StyleSheet.create({
 container: {
  flex: 1,
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: "center"
},

item: {


  flex:1,
  marginBottom:5,
  
},



image: {
  flex:1,
  width:40,
  height: 40,
  borderRadius: 20 ,
}

});

export default class wishlist extends Component {



  rami() {


    return new Promise((next, error) => {

      var self = this; 
      var i = 0;
      var num=0;
      var uid = firebase.auth().currentUser.uid;
      firebase.database()
      .ref('items')
      .child(uid)
      .once('value')
      .then(function(snapshot) {
       num =snapshot.numChildren();
        // alert(num);
        snapshot.forEach(function(childSnapshot) {

          firebase.database()
          .ref('items')
          .child(uid).child(childSnapshot.key).once('value').then(function(snapshot) {
            var piclink = snapshot.val().itemPic;
            var desc = snapshot.val().description;
            var title = snapshot.val().title;
            
            piclinks.push(piclink);
            image.push(
              <TouchableHighlight
              activeOpacity={ 0.75 }
              style={ styles.item }
              onPress={self.fuck.bind(this,desc,piclink,title)}
              >
              <View style= {{flexDirection:'row' , flex:1}}>
              <View style= {{
                flex:0.5}}>
                <Image
                style={ styles.image }
                source={{uri: piclink}}
                /> 
                </View>
                <View style= {{margin:5,paddingBottom:10 , borderBottomWidth:0.8 , marginLeft:10,flex:0.5}}>
                <Text style={{fontWeight:'bold' ,fontSize:17}}>{title}</Text>
                <Text>{title}</Text>
                <Text>{title}</Text>
                </View>

                </View>
                </TouchableHighlight>);
            
            i++;
            if (i==num){
              var rm = "i fucked my self";

              next(rm);
            }

          });
          
        })

    // ...
  });
    //  alert(this.state.image[0]);
    
     // piclinks[1]="piclink";
     // alert(piclinks[1]);
     //alert(piclinks[0]);
   }); 
  }
  fuck(desc,piclink,title){


   this.props.replaceRoute(Routes.fuck(desc,piclink,title));
     // alert(desc + title + piclink);

   }
   _renderImage(){


     this.rami().then((rm) => {
    //alert(piclinks[1]);
    //should find a better way to do this 
    if (!this.state.loaded){
      this.setState({
        loaded:true
      });
      
    }

  });
  //alert(image.length);
  return image;

}

constructor(props) {
  super(props);
  this.rami = this.rami.bind(this);
  this.fuck = this.fuck.bind(this);
  this.state = {
   image: [null],
   hi: "hi",
   loaded:false
 };
}
goToSetting()
{
  this.props.replaceRoute(Routes.setting());
}



render() {
  const TopNavigation = () => (
    <View style={{ padding: 10, flexDirection: 'row', backgroundColor: '#00D77F' }}>
    <View style={{ flex:0.4 , justifyContent:'center' , margin:5  }}>
    <TouchableOpacity
    onPress={this.goToSetting.bind(this)}
    style={styles.buttonStyle}
    >
    <Image 
    source={require('funshare/src/img/arrow.png')}
    style={{width:20, height:20}}
    />

    </TouchableOpacity>
    </View>

    <View style={{ flex:0.2 , alignItems:'center', justifyContent:'center' , margin:5  }}>
    <IcoButton
    source={require('funshare/src/img/wishliste.png')}
    icostyle={{width:35, height:35}}
    />
    </View>

    <View style={{ flex:0.4 , alignItems:'flex-end', justifyContent:'center' , margin:5  }}>


    </View>

    </View>
    );


    return(

    <View style= {style.backgroundImage}
    >

    <TopNavigation/>
    <ScrollView style={{ flex:1 }}>



    {this._renderImage()}





    </ScrollView>


    </View>
    );
  }
}

AppRegistry.registerComponent('wishlist', () => wishlist);
