import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
const firebaseConfig = {
  apiKey: "AIzaSyAmzhOiMjv9ip6sD_kKxFK0jhC4azhM6bA",
  authDomain: "colorful-e68bd.firebaseapp.com",
  projectId: "colorful-e68bd",
  storageBucket: "colorful-e68bd.appspot.com",
  messagingSenderId: "580124798189",
  appId: "1:580124798189:web:0cf594375c591171f1f0e4",
  measurementId: "G-LZ3C9EJGPD",
  databaseURL: "https://colorful-e68bd-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

firebase.initializeApp(firebaseConfig);

export default  firebase ;