import firebase from "firebase/app"
import "firebase/auth";
import "firebase/firestore";
import "firebase/analytics"

const firebaseConfig = {
    apiKey: "AIzaSyDJbOdR5S7jgDoOZxnvA6UvxDSJw2dsSuo",
    authDomain: "reactjsproject-61da1.firebaseapp.com",
    projectId: "reactjsproject-61da1",
    storageBucket: "reactjsproject-61da1.appspot.com",
    messagingSenderId: "1050291842086",
    appId: "1:1050291842086:web:0343ff8358b1101ef14ae7",
    measurementId: "G-9FJYWTLVWT"
  };
  
  firebase.initializeApp(firebaseConfig);
  