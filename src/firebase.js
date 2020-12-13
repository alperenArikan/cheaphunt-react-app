import firebase from "firebase/app"
import "firebase/auth";
import "firebase/firestore";


var firebaseConfig = {
    apiKey: "AIzaSyANLM6KmCXPykFb0K3eY0kT9eJwfz31atw",
    authDomain: "cheaphunt-react.firebaseapp.com",
    databaseURL: "https://cheaphunt-react.firebaseio.com",
    projectId: "cheaphunt-react",
    storageBucket: "cheaphunt-react.appspot.com",
    messagingSenderId: "288284810937",
    appId: "1:288284810937:web:808c0ea851d9e8aa3c4568"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export let db = firebase.firestore();
  export default firebase