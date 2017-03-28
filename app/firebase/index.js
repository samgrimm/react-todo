import firebase from 'firebase';

try {
  var config = {
     apiKey: "AIzaSyBjZFWTiu2OyKMBa7gSSOcMr4CCL4mYELA",
     authDomain: "sam-todo-app.firebaseapp.com",
     databaseURL: "https://sam-todo-app.firebaseio.com",
     storageBucket: "sam-todo-app.appspot.com",
     messagingSenderId: "780867077265"
   };
   firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
