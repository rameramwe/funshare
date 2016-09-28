'use strict';
import React from 'react'; 
import{
  AppRegistry,
  AsyncStorage,
  Dimensions,
  Image,
  NativeModules,
  PropTypes,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Platform,
  Text
} from 'react-native';
import IcoButton from 'funshare/src/components/icobutton';
import IconBadge from 'react-native-icon-badge';
import StyleVars from 'funshare/StyleVars';
import Login from './login';
import firebase from 'firebase';
import Routes from 'funshare/Routes';
import DataStore from 'funshare/DataStore';
import Actions from 'funshare/Actions';
import SharedStyles from 'funshare/SharedStyles';
import RNFetchBlob from 'react-native-fetch-blob'
import IconButton from 'funshare/src/components/icotextButton';
const fs = RNFetchBlob.fs
const Blob = RNFetchBlob.polyfill.Blob
const polyfill = RNFetchBlob.polyfill
window.XMLHttpRequest = polyfill.XMLHttpRequest
window.Blob = polyfill.Blob
var deviceWidth = Dimensions.get('window').width -6;
var deviceheight = Dimensions.get('window').height  ;
const dirs = RNFetchBlob.fs.dirs
const prefix = ((Platform.OS === 'android') ? 'file://' : '')
const testImageName = `image-from-react-native-${Platform.OS}-${new Date()}.png`
const testFile = null
const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:'stretch',
  },
  inputContainer: {
   
    margin:20, 
    marginTop:10,
    marginBottom:0   
    
  },

  input: {
   
    textAlign: 'center',
    fontSize: 18,
    color: '#FF4470',
    fontWeight: 'bold',
  },

  username: {
    
    textAlign: 'center',
    fontSize: 23,
    fontWeight: 'bold',
  },
  imageContainer:{

    marginTop: 25,
    height:deviceheight/4,
  },
  profilePictureContainer: {
    
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "center"
  },
  btnContainer:{
   
    alignItems: "center",
    justifyContent: "center",
    flexDirection: 'row',

    marginBottom: 5
  },

  profilePicture: {
    width: 140,
    height: 140,
    borderRadius: 70,
    marginBottom: 5,

  },


  
  buttongrop: {
   paddingTop:45,
   height:deviceheight/4
   
 },
 footer: {
  bottom: 0,
  left: 0,
  right: 0,
  height: 48,
  alignItems: "center",
  marginTop:37,
  paddingVertical: 15,
  backgroundColor: "rgba(255,255,255,0.1)",
  borderTopWidth: 1,
  borderTopColor: "rgba(255,255,255,0.5)"
},
footerText: {
  color: "white",
  fontSize: 14
},
IContainer:{
  alignItems:'flex-start',
  padding:3,
  backgroundColor: "rgba(255,255,255,0.1)",
}
});

class Home1 extends React.Component {
  constructor(props) {
    super(props);
    var currentUser = DataStore.getCurrentUser();
    this.state = {
      loaded: false,
      failed: false,
      profilePicture:{uri:currentUser.photoURL} ,
      picdata:{uri:currentUser.photoURL},
      dummypic:{uri:currentUser.photoURL},
      username:currentUser.displayName   
    };
  }


  componentWillMount() {

    Actions.auth();
    Actions.onboard.started.listen(this.onOnboardStarted.bind(this));
    Actions.onboard.completed.listen(this.onOnboardCompleted.bind(this));
  }

  componentDidMount() {
    Actions.loadUser.completed.listen(this._onLoadUserCompleted.bind(this));
    Actions.logout.listen(this._onLogout.bind(this));
  }
  
  goToHome()
  {
    this.props.replaceRoute(Routes.Home());
  }
  goToWish()
  {
    this.props.replaceRoute(Routes.wishlist());
  }
  render() {
   const TopNavigation = () => (
    <View style={{ padding: 10, flexDirection: 'row', backgroundColor: '#FF5C7E' }}>
    <View style={{ flex:0.4 , justifyContent:'center' , margin:5  }}>

    
    
    </View>

    <View style={{ flex:0.2 , alignItems:'center', justifyContent:'center'   }}>
    <IcoButton
    
    source={require('funshare/src/img/f.png')}
    icostyle={{width:45, height:45}}
    />
    </View>

    <View style={{ flex:0.4 , alignItems:'flex-end', justifyContent:'center' , margin:5  }}>
    <IcoButton
    
    source={require('funshare/src/img/swop.png')}
    onPress={this.goToHome.bind(this)}
    icostyle={{width:35, height:35}}
    />

    </View>

    </View>
    );
   return (

    <View style = {styles.container}>  
    <TopNavigation/>  
    <ScrollView
    style={{flex:1}}
    >


    <View style={styles.imageContainer}>

    <View
    style={styles.profilePictureContainer}
    >
    <IconBadge
    MainElement={

      <Image
      source={this.state.dummypic}
      style={styles.profilePicture}
      />

    }
    BadgeElement={
     <TouchableOpacity
     onPress={this.uploadphoto.bind(this)}
     >
     <Image source={require('../img/edit.png')}
     resizeMode={Image.resizeMode.contain}
     style={{width:25,height:25}}/>
     </TouchableOpacity>
   }

   IconBadgeStyle={
    {
      width:25,
      height:25,

      backgroundColor: '#FF5C7E'
    }
  }
  />
  </View>
  <View>
  <Text
  style={styles.username}
  >{this.state.username}</Text>
  </View>
  </View>


  
  <View style= {{alignItems:'center'}}>
  <View style = {styles.buttongrop} >

  <View style={styles.inputContainer}>
  <IconButton     
  container={{  flex: 1 ,marginBottom:5,flexDirection: "row" }}
  inputButtonText={{fontSize:25}}
  value={"Meine Objekte"}
  source={require('../img/box.png')}
  icostyle={{ width:30,
    height: 30,
    marginLeft:3}}
    onPress={this.goTomysuff.bind(this)}
    />

    </View>

    <View style={styles.inputContainer}>
    <IconButton
    container={{  flex: 1 ,marginBottom:5,flexDirection: "row" }}
    inputButtonText={{fontSize:25}}
    value={"Einstellungen"}
    source={require('../img/tools.png')}
    onPress={this.goToSetting.bind(this)}
    />

    </View>
    <View style={styles.inputContainer}>
    <IconButton
    container={{  flex: 1 ,marginBottom:5, flexDirection: "row" }}
    inputButtonText={{fontSize:25}}
    value={"Wunschliste"}
    source={require('../img/wunsch.png')}
    onPress={this.goToWish.bind(this)}
    />

    </View>
    <View style={styles.inputContainer}>
    <IconButton
    container={{  flex: 1 ,marginBottom:7,flexDirection: "row" }}
    inputButtonText={{color:'#FF5C7E',fontSize:25}}
    value={"Premiume"}
    source={require('../img/star.png')}
    onPress={this.logout.bind(this)}
    />

    </View>
    </View>
    </View>
    <View style={{height:deviceheight/4,flex:1 , justifyContent:'flex-end',  alignItems:'center'}}>
    <Image

    source={require('../img/ifunshare.png')}
    style={{height:50, width:170}}

    />
    </View>
    </ScrollView>

    </View>

    );
 }
 uploadphoto() {

  var Platform = require('react-native').Platform;
  var ImagePicker = require('react-native-image-picker');

    // More info on all the options is below in the README...just some common use cases shown here
    var options = {
      title: 'upload a new profile picture  ',
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

      profilePicture: response.path,
      dummypic:{uri: response.uri, isStatic: true}
      
    });
   // alert(response.uri);
   this.prepare1();
    //this.upload1();
  //  Actions.onboard.started();
  
}
});


  }

  addstuff() {

    this.props.replaceRoute(Routes.addstuff());

  }

  goTomysuff() {

    this.props.replaceRoute(Routes.mystuff());

  }

  goToSetting() {

    this.props.replaceRoute(Routes.setting());

  }
  upload() {         
    let rnfbURI = RNFetchBlob.wrap(this.state.profilePicture)
  //alert(rnfbURI);
  // create Blob from file path
  //alert(this.state.profilePicture);
  Blob.build(rnfbURI, { type : 'image/jpeg;'})
  .then((blob) => {
      // upload image using Firebase SDK
     // alert("st");
     var  uploadTask = firebase.storage()
     .ref('users profile photos')
     
     .child(testImageNamesakka)
     .put(blob, { contentType : 'image/png' });
     uploadTask.on('state_changed', function(snapshot){
  // Observe state change events such as progress, pause, and resume
  // See below for more detail
}, function(error) {
  alert(error);
}, function() {
  alert("successful");
  // Handle successful uploads on complete
  // For instance, get the download URL: https://firebasestorage.googleapis.com/...
  var downloadURL = uploadTask.snapshot.downloadURL;
});

     
   })
}
_onLoadUserCompleted(user) {
  let currentUser = DataStore.getCurrentUser();


  if (currentUser.onboarded) {
    this.setState({ loaded: true });
  } else {
    this.props.replaceRoute(Routes.Home1());
  }
}

_onLogout() {
  this.props.replaceRoute(Routes.login());
}
logout(){

  Actions.logout();

}
onOnboardStarted(url) {


 Actions.onboard(url);
}

onOnboardCompleted() {

  this.props.replaceRoute(Routes.Home1());
}
prepare1(){       

// prepare upload image
RNFetchBlob
.config({ fileCache : true, appendExt : 'png' })
.fetch('GET', 'https://avatars0.githubusercontent.com/u/5063785?v=3&s=460')
.then((resp) => {
  testFile = this.state.profilePicture
   // alert(testFile);
   this.upload1();
 })
}
upload1(){  
  let rnfbURI = RNFetchBlob.wrap(testFile)
  // create Blob from file path
  //alert(rnfbURI);
  Blob
  .build(rnfbURI, { type : 'image/jpeg;'})
  .then((blob) => {
      // upload image using Firebase SDK
      var uploadTask = firebase.storage()
      .ref('profiles')
      .child('uid')
      .child(testImageName);
      uploadTask.put(blob, { contentType : 'image/png' })
      .then((snapshot) => {
        uploadTask.getDownloadURL().then(function(url) {

            //alert(scc);
            Actions.onboard.started(url);

  //    this.setState({ picdata: scc}, function() {
  //  alert(this.state.picdata);
//});
  //    this.setpicdata(scc);
  
}).catch(function(error) {
  // Handle any errors
});
})
    })
 //   alert(this.state.picdata);
 
}



}

function base64toBlob(base64Data, contentType) {
  contentType = contentType || '';
  var sliceSize = 1024;
  var byteCharacters = atob(base64Data);
  var bytesLength = byteCharacters.length;
  var slicesCount = Math.ceil(bytesLength / sliceSize);
  var byteArrays = new Array(slicesCount);

  for (var sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
    var begin = sliceIndex * sliceSize;
    var end = Math.min(begin + sliceSize, bytesLength);

    var bytes = new Array(end - begin);
    for (var offset = begin, i = 0 ; offset < end; ++i, ++offset) {
      bytes[i] = byteCharacters[offset].charCodeAt(0);
    }
    byteArrays[sliceIndex] = new Uint8Array(bytes);
  }
  return new Blob(byteArrays, { type: contentType });
}

export default Home1;