import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
const firebaseConfig = {
  apiKey: "AIzaSyB-P3WiE6tHi2xN_oBPNkaW2hqeLsg13yw",
  authDomain: "bigbraintime-29b52.firebaseapp.com",
  projectId: "bigbraintime-29b52",
  storageBucket: "bigbraintime-29b52.appspot.com",
  messagingSenderId: "59758052734",
  appId: "1:59758052734:web:e05c3fadc973a2cba79f2f",
  measurementId: "G-BFGYKJFPSB",
  databaseURL: "https://bigbraintime-29b52-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

firebase.initializeApp(firebaseConfig);

export default firebase;