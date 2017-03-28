import firebase from 'firebase';

var config = {
   apiKey: "AIzaSyBjZFWTiu2OyKMBa7gSSOcMr4CCL4mYELA",
   authDomain: "sam-todo-app.firebaseapp.com",
   databaseURL: "https://sam-todo-app.firebaseio.com",
   storageBucket: "sam-todo-app.appspot.com",
   messagingSenderId: "780867077265"
 };
 firebase.initializeApp(config);
 var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.0.0'
  },
  isRunning: true,
  user: {
    name: 'Sam',
    age: 39
  }
});

// var notesRef = firebaseRef.child('notes');
//
// notesRef.on('child_added', (snapshot) => {
//   console.log('child_added', snapshot.key, snapshot.val());
// });
//
// notesRef.on('child_changed', (snapshot) => {
//   console.log('child_changed', snapshot.key, snapshot.val());
// });
//
// notesRef.on('child_removed', (snapshot) => {
//   console.log('child_removed', snapshot.key, snapshot.val());
// });
//
// var newNoteRef = notesRef.push({
//   text: 'Walk the Dog!'
// });

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
  console.log('child_added', snapshot.key, snapshot.val());
});

todosRef.on('child_changed', (snapshot) => {
  console.log('child_changed', snapshot.key, snapshot.val());
});

todosRef.on('child_removed', (snapshot) => {
  console.log('child_removed', snapshot.key, snapshot.val());
});

var newTodoRef1 = todosRef.push({
  text: 'Walk the Dog!'
});

var newTodoRef2 = todosRef.push({
  text: 'Get groceries!'
});




// firebaseRef.child('user').on('value', (snapshot) => {
//   console.log('User ref changed', snapshot.val());
// })
//
// firebaseRef.child('user').update({name: 'Mike'});
//
// firebaseRef.child('app').update({name: 'Another'});

// firebaseRef.once('value').then((snapshot) => {
//   console.log('Got entire db', snapshot.val());
// }, (e) => {
//   console.log('Unable to fetch value', e);
// });
//
// firebaseRef.child('app').once('value').then((snapshot) => {
//   console.log('Got entire db', snapshot.key, snapshot.val());
// }, (e) => {
//   console.log('Unable to fetch value', e);
// });
//
// firebaseRef.on('value', (snapshot) =>{
//   console.log('Got value', snapshot.val());
// });
//
// firebaseRef.update({isRunning: false});

// firebaseRef.update({
//   isRunning: null
// });
//
// firebaseRef.child('user/age').remove();

// firebaseRef.child('app/name').remove();
//
// firebaseRef.child('app').update({
//   version: '2.0',
//   name: null
// });

// firebaseRef.update({
//   'app/name': 'Todo Application',
//   'user/name': 'Samantha'
// });

// firebaseRef.child('app').update({
//   name: 'Todinho'
// });
//
// firebaseRef.child('user').update({
//   name: 'Joshiedo'
// });
