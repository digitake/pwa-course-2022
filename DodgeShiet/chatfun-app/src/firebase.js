import firebase from "firebase/app";
import "firebase/auth";


export const auth = firebase.initializeApp({
  apiKey: "AIzaSyB2YrDgr1G-RZ6_FBX-Nv2HEFu4Y0rDTbA",
  authDomain: "chatfun-firebase.firebaseapp.com",
  projectId: "chatfun-firebase",
  storageBucket: "chatfun-firebase.appspot.com",
  messagingSenderId: "357350828095",
  appId: "1:357350828095:web:60086385850483130cf08a",
  measurementId: "G-228YCP1K2Y"
}).auth();