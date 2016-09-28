  'use strict';
  import React, { Component } from 'react';
  import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    AsyncStorage,
    Modal,
    Dimensions,
    TouchableHighlight
  } from 'react-native';

  import IcoButton from 'funshare/src/components/icobutton';
  import Header from '../components/header';
  import Login from './login';
  import firebase from 'firebase';
  import Routes from 'funshare/Routes';
  import DataStore from 'funshare/DataStore';
  import Actions from 'funshare/Actions';
  import SharedStyles from 'funshare/SharedStyles';
  import StyleVars from 'funshare/StyleVars';
  import Tinder from 'funshare/Tinder';
  var deviceWidth = Dimensions.get('window').width -6;
  var deviceheight = Dimensions.get('window').height -(deviceWidth/2) ;
  var piclinks=["fuck"];
  var image=[null] ;

  const styles = StyleSheet.create({
    Mcontainer: {flex:1 ,  justifyContent: 'flex-end', }, 
    MinnerContainer: {flex:1,justifyContent:'flex-end' },
    buttonContainer: {
      paddingTop: 96,
      alignItems: "center"
    },
    reloadText: {
      textAlign: "center",
      marginVertical: 20
    },
    item: {
     
    width:80,
    height: 80,
    borderColor: '#efefef',
    borderWidth: 1,
    margin:8,
    borderRadius:10,
    },
   image: {
    flex:1,
    alignItems: "center",
    justifyContent: "center",
    width: 78,
    height: 78 ,
    },
    imageContainer:{

      marginBottom:80
    },
    profilePictureContainer: {

      flexDirection: 'row',
      alignItems: "center",
      justifyContent: "center"
    },
    Picture: {
      width: 100,
      height: 100,
      borderRadius: 50,
      margin: 15,

    },
 
    button: { width: 256 }
  });
  export default class Home extends Component {
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

              <View>
              <Image
              resizeMode={Image.resizeMode.contain}
              style={ styles.image }
              source={{uri: piclink}}
              /> 
              </View>    
              
              </TouchableHighlight>);

              i++;
              if (i==num){
                var rm = "i fucked my self";

                next(rm);
              }

            });
          })
        });
      }); 
    }
    fuck( ){

    }
    _renderImage(){


     this.rami().then((rm) => {
      //alert(piclinks[1]);
      //should find a better way to do this 
      if (!this.state.loaded1){
        this.setState({
          loaded1:true
        });

      }

    });
    //alert(image.length);
    return image;

  }
  constructor(props) {
    super(props);

    //this.fuck = this.fuck.bind(this);
    this.state = {

     image: [null],
     hi: "hi",
     loaded1: false,
     loaded: false,
     failed: false,
     animationType: 'fade',
     modalVisible: false,
     transparent: true,
   };
 }

 componentWillMount() {

  Actions.auth();
}

componentDidMount() {
  Actions.loadUser.completed.listen(this._onLoadUserCompleted.bind(this));
  Actions.logout.listen(this._onLogout.bind(this));
}



_setModalVisible = (visible) => {
  this.setState({modalVisible: visible});
};

connfirm(){

}


render(){
  var modalBackgroundStyle = {
    backgroundColor:   'rgba(0, 0, 0, 0.5)' ,
  };
  var innerContainerTransparentStyle =  
  { backgroundColor:   'rgba(0, 0, 0, 0.5)'}


  return (

  <View style={{flex:1}}>

  <ScrollView style={{ flex:1 }}>

   <View>

   <Modal
  animationType={this.state.animationType}
  transparent={this.state.transparent}
  visible={this.state.modalVisible}
  onRequestClose={() => {this._setModalVisible(false)}}
  >
  
  <View style={[styles.MinnerContainer, innerContainerTransparentStyle]}>

  <View>
  <Text style={{color:'white', fontSize:16 , marginLeft:8}}>Meine Objekte</Text>
  
    <View style ={{ flex: 1,flexDirection:'row',flexWrap: 'wrap', justifyContent: "center"}}>

    
           
    {this._renderImage()}
    </View>


  </View>
  </View>
  </Modal>
 
  </View>

  <View style={{flex:1}}>
  <View style={{marginTop:5 , marginBottom:6, alignItems:'center'}}>

  <View style={{flexDirection:'row' ,alignItems:'center' , justifyContent:'center'  }}>
  <View style={{flex:0.1 ,alignItems:'center'}}>
  <IcoButton
  source={require('funshare/src/img/f.png')}
  onPress={this.goToProfile.bind(this)}
  icostyle={{width:40, height:40}}
  />
  </View>
  <Image

  source={require('../img/ifunshare.png')}
  style={{height:50, width:150 , }}

  />
  <View style={{flex:0.1,alignItems:'center'}}>
  <IcoButton
  source={require('funshare/src/img/chat.png')}
  onPress={this.goToChat.bind(this)}

  icostyle={{width:40, height:40}}
  />
  </View>
  </View>
  </View>
  <Tinder style={{flex: 3}} />
  <View style={{flex:1 , marginTop:5, justifyContent:'flex-end'}}>
  <View style={{flex:1,margin:20,flexDirection:'row',alignItems:'center', justifyContent:'center'}}>
  <View style={{flex:0.25,alignItems:'center'}}>
  <IcoButton
  source={require('funshare/src/img/back.png')}

  icostyle={{width:45, height:45}}
  />
  </View>
  <View style={{flex:0.25,alignItems:'center'}}>
  <IcoButton
  source={require('funshare/src/img/dislike.png')}

  icostyle={{width:60, height:60}}
  />
  </View>
  <View style={{flex:0.25,alignItems:'center'}}>
  <IcoButton
  source={require('funshare/src/img/like.png')}
  onPress={this._setModalVisible.bind(this, true)}
  icostyle={{width:60, height:60}}
  />
  </View>


  <View style={{flex:0.25,alignItems:'center'}}>
  <IcoButton
  source={require('funshare/src/img/wuncbt.png')}

  icostyle={{width:45, height:45}}
  />
  </View>
  </View>
  </View>
  </View>
  </ScrollView>
  </View>
  );
}


_onLoadUserCompleted(user) {
  let currentUser = DataStore.getCurrentUser();


  if (currentUser.onboarded) {
    this.setState({ loaded: true });
  } else {
    this.props.replaceRoute(Routes.Home1(currentUser));
  }
}

_onLogout() {
  this.props.replaceRoute(Routes.login());
}
logout(){

  Actions.logout();

}
mystuff(){

 this.props.replaceRoute(Routes.addstuff());

}

goToChat(){
 this.props.replaceRoute(Routes.fuck());
}
goToProfile(){

 this.props.replaceRoute(Routes.Home1());

}



}

