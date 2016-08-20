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
  var piclinks=["fuck"];
  var image=[] ;

  export default class mystuff extends Component {

    rami() {
     
      return new Promise((next, error) => {
       var i = 0;
       var num=0;
       var uid = firebase.auth().currentUser.uid;
       firebase.database()
       .ref('items')
       .child(uid)
       .once('value')
       .then(function(snapshot) {
         num =snapshot.numChildren();
         alert(num);
         snapshot.forEach(function(childSnapshot) {
           
          firebase.database()
          .ref('items')
          .child(uid).child(childSnapshot.key).once('value').then(function(snapshot) {
            var piclink = snapshot.val().itemPic;
            piclinks.push(piclink);
            image.push(
              <TouchableOpacity
              activeOpacity={ 0.75 }
              style={ styles.item }
              >
              <Image
              style={ styles.image }
              source={{uri: piclink}}
              /> 
              
              </TouchableOpacity>);
            
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
    componentDidMount() {
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
    this.state = {
     image: ["null"],
     hi: "hi",
     loaded:false
   };
  }
  render(){
   

    return (

     <ScrollView style={{ flex:1 }}>
     <View style={styles.container}>
     

     {this._renderImage()}




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

