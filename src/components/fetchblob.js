'use strict';
import RNTest from 'react-native-testkit'
import RNFetchBlob from 'react-native-fetch-blob'
import React from 'react'; 
import{
	StyleSheet,
	PropTypes,
	Text,
	TouchableOpacity,
	View,
	Platform,
	Image
} from 'react-native';

const fs = RNFetchBlob.fs
const Blob = RNFetchBlob.polyfill.Blob
const polyfill = RNFetchBlob.polyfill
window.XMLHttpRequest = polyfill.XMLHttpRequest
window.Blob = polyfill.Blob

const { Assert, Comparer, Info, prop } = RNTest
const dirs = RNFetchBlob.fs.dirs
const prefix = ((Platform.OS === 'android') ? 'file://' : '')
const testImageName = `image-from-react-native-${Platform.OS}-${new Date()}.png`
const testFile = null
function upload1(path){  
	testFile=path;
	let rnfbURI = RNFetchBlob.wrap(testFile)
  // create Blob from file path
  //alert(rnfbURI);
  Blob
  .build(rnfbURI, { type : 'image/jpeg;'})
  .then((blob) => {
      // upload image using Firebase SDK
      var uploadTask = firebase.storage()
      .ref('profiles')
      .child('uid1')
      .child(testImageName);
      uploadTask.put(blob, { contentType : 'image/png' })
      .then((snapshot) => {
      	uploadTask.getDownloadURL().then(function(url) {

            //alert(scc);
           // Actions.onboard.started(url);

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
function uploadphoto() {
	return new Promise((next, error) => {

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
    const source1 = {uri: 'data:image/jpeg;base64,' + response.data, isStatic: true};
    const source = {uri: response.uri, isStatic: true};
    // or a reference to the platform specific asset location
    if (Platform.OS === 'ios') {
    	const source = {uri: response.uri.replace('file://', ''), isStatic: true};
    } else {
    	const source = {uri: response.uri, isStatic: true};
    }
    next(source);

    this.upload1(response.path);
   // alert(response.uri);
   
    //this.upload1();
  //  Actions.onboard.started();

}
});
 
});   
}


export default {
	upload1,
	uploadphoto
}

