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
      let callback = function (err, authData) {
        if (err) {
          error(err);
        } else {
          next(authData);
        }
      };
      alert(data.email);
      firebase.auth().signInWithEmailAndPassword(
       data.email,
      data.password
   ).then(function() {
  alert("Sign-in successful");

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
      this.firebase.child('profiles').child(uid).once('value')
        .then((snapshot) => next(snapshot.val()))
        .catch((err) => error(err));
    });
  }

}

export default new ApiRequest();
