'use strict';
import firebase from 'firebase';



class ApiRequest {


  signup(data) {
    return new Promise((next, error) => {
      this.firebase.createUser(data)
      .then((authData) => {
        let userRef = this.firebase.child('profiles').child(authData.uid);
        userRef.set({ email: data.email })
        .then(() => next(data))
        .catch((err) => error(err));
      })
      .catch((err) => error(err));
    });
  }

  login(data) {
    return new Promise((next, error) => {

      firebase.auth().signInWithEmailAndPassword(
       data.email,
       data.password
       ).then(function(result) {
         next(result);

       }, function(error) {
        alert("Sign-in failed");
      });

     });
  }

  logout() {
  	firebase.auth().signOut().then(function() {
  		alert("Sign-out successful");
  	}, function(error) {
  		alert("Sign-out failed");
  	});
  }

  loadUser(uid) {
    return new Promise((next, error) => {
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          
       /*   user.updateProfile({
            displayName: "Jane Q. User",
            photoURL: "http://domaingang.com/wp-content/uploads/2012/02/example.png",
           
          }).then(function() {
                 // alert(user.photoURL)
                  //alert(user.displayName)
          }, function(error) {
           // An error happened.
});*/
          next(user);
        } else {
    // No user is signed in.
  }
});
      firebase.database().ref('profiles/' + uid ).on('value', function(snapshot) {

      });
      firebase.database().ref().child('profiles').child(uid).once('value')
      .then((snapshot) => next(snapshot.val()))
      .catch((err) => error(err));
    });
  }
  updateUser(uid, payload) {
     
    return new Promise((next, error) => {
      
     // var userRef = firebase.database().ref().child('profiles').child(uid);
      
    //  var file = payload;
     // var uploadTask = firebase.database().ref().child('images').put(file);
    /*  uploadTask.on('state_changed', function(snapshot){
  // Observe state change events such as progress, pause, and resume
  // See below for more detail
}, function(error) {
 alert(error);
}, function() {
  // Handle successful uploads on complete
  // For instance, get the download URL: https://firebasestorage.googleapis.com/...
  var downloadURL = uploadTask.snapshot.downloadURL;
});*/
/*firebase.database().ref().child('profiles').child(uid).child('photoURL').getDownloadURL().then(function(url) {
  alert(url);
  // Get the download URL for 'images/stars.jpg'
  // This can be inserted into an <img> tag
  // This can also be downloaded directly
}).catch(function(error) {
  alert(error);
});*/

     var user = firebase.auth().currentUser;

user.updateProfile({
  photoURL: payload
}).then(function() {
 //alert ("fuck");
 next(payload);
}, function(error) {
  alert ("fuck1");
});

    
});    


   
  }
  uploadPost(uid,payload) {
    alert("fu")
    return new Promise((next, error) => {
      let postRef = firebase.storage().ref().child('items').child(uid);
      postRef.set(payload)
      .then(() => next(payload))
      .catch((err) => error(err));
    });
  }

}

export default new ApiRequest();
