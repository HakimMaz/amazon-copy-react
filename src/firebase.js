import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyDdiAcGZN-YQLzv5VFWj86NhAhO3Ln4mfo",
    authDomain: "challenge-aa993.firebaseapp.com",
    databaseURL: "https://challenge-aa993.firebaseio.com",
    projectId: "challenge-aa993",
    storageBucket: "challenge-aa993.appspot.com",
    messagingSenderId: "657443661059",
    appId: "1:657443661059:web:608c4ef8291f282d263536",
    measurementId: "G-D7VQH2L0EZ"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  export {db,auth};